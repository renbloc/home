require('dotenv').config()

const db = require('../helpers/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TokenHelper = require('../helpers/token')
const MailHelper = require('../helpers/mail')
const LoggerHelper = require('../helpers/logger')



exports.create_comment = async (req, res, next) => {
    try {

        const { comment, rating } = req.body

        if (!comment || !rating) {
            res.status(401).send('You need to write a comment and rating')
        } else {

            const { userId } = req.user.id
            const { orgId } = req.body.orgId

            const comment = {
                comment: comment,
                rating: rating,
                userId: userId,
                orgId: orgId
            }

            await db('comments').insert(comment)


        }
    } catch (error) {

    }

}

exports.get_comments_org = async (req, res, next) => {

    try {
        const { orgId } = req.body

        if (!orgId) {
            res.status(401).send('Can not get data without id of organisation')
        } else {
            const users = await db('comments').where({ orgId: orgId })
        }
    } catch (error) {

    }

}

exports.get_comments_user = async (req, res, next) => {

    try {
        const { userId } = req.body

        if (!orgId) {
            res.status(401).send('Can not get data without id of organisation')
        } else {
            const users = await db('comments').where({ userId: userId })

        }
    } catch (error) {

    }

}

exports.delete_comment = async (req, res, next) => {

    try {
        const { commentId } = req.body

        if (!commentId) {
            res.status(401).send('Can not get data without id of organisation')
        } else {
            db('comments').where({ id: commentId }).del()
        }
    } catch (error) {

    }
}