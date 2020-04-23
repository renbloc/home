require('dotenv').config()

const jwt = require('jsonwebtoken')
const db = require('./db')

const addUser = async (req, res, next) => {
  const AccessToken = req.cookies.AccessToken
  const RefreshToken = req.cookies.RefreshToken
  
  
  if (AccessToken && RefreshToken) {
    try {
      const { userId } = jwt.verify(AccessToken, process.env.ACCESS_TOKEN_SECRET);
      req.user = userId;
      
    } catch (err) {
      const newTokens = await refreshTokens(AccessToken, RefreshToken);
      
      if (newTokens.newAccessToken && newTokens.newRefreshToken) {
        res.cookie('AccessToken', newTokens.newAccessToken, { expire: 360000 + Date.now(), secure: false, httpOnly: true})
        res.cookie('RefreshToken', newTokens.newRefreshToken, { expire: 360000 + Date.now(), secure: false, httpOnly: true})
      }
      req.user = newTokens.user;
    }
  }
  next();
};

const generateAccessToken = function (payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' })
}

const generateRefreshToken = function (payload) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m' })
}


const refreshTokens = async (token, refreshToken) => {
  
  let userId = -1;
  try {
    const payload = jwt.decode(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    userId = payload.userId

  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const user = await db('users').where({ id: userId }).first()
  

  if (!user) {
    return {};
  }

  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return {};
  }

  const payload = { userId: user.id }
  const newAccessToken = generateAccessToken(payload)
  const newRefreshToken = generateRefreshToken(payload)
  return {
    newAccessToken: newAccessToken,
    newRefreshToken: newRefreshToken,
    user,
  };
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  addUser
}