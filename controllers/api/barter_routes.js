const router = require('express').Router();
const { Barter, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;