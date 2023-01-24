let getHomePage = (req, res) => {
    return res.render('homepages.ejs')
}


module.exports = {
    getHomePage: getHomePage, 
}