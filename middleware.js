module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl; 
        req.flash("error","you must logged in to create the listing!");
       return res.redirect("/login");
    }
    next();
}