const express=require('express');

const { signup,loginPage,register,login,allUsers,logout } = require('./controllers/userController');
const {requireAuth} = require('./utils/auth');
const {home,addBlog,myBlogs} = require('./controllers/blogController');
const { createBlog } = require('./controllers/blogController');
const { deleteBlog } = require('./controllers/blogController');
const { editBlog } = require('./controllers/blogController');
const { updateBlog } = require('./controllers/blogController');



const router=express.Router()

router.get('/signup',signup)

router.get('/login',loginPage)

router.post('/register',register)

router.post('/login',login)

router.get('/allusers',requireAuth,allUsers)

router.get('/logout',logout)

router.get('/',home)

router.get('/home',home);

router.get('/myblogs',myBlogs)

router.get('/addblog',addBlog)

router.get('/editblog',editBlog)

router.post('/createblog',createBlog)

router.post('/updateblog',updateBlog)

router.get('/deleteblog',deleteBlog)



module.exports=router

