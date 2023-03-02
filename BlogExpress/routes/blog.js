const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router =  express.Router()

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

router.get('/blogs',(req,res)=>{
    blogs.forEach(e => {
        console.log(e.title)
    });

    // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
    res.render('blogHome',{blogs:blogs})
})

router.get('/blogpost/:slug',(req,res)=>{
    blog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    console.log(blog)

    // res.sendFile(path.join(__dirname,'../templates/blogPost.html'))
    res.render("blogPage",{title:blog[0].title,content:blog[0].content})
})





module.exports = router