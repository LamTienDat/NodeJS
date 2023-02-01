import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepages.ejs',{
            data: JSON.stringify(data)
        })
    } catch(e) {
        console.log(e);
    }
}

let getCRUD = ( req, res) => {
    return res.render('crud.ejs')
}

let getPost = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message);
    return res.send('post')
}


let displayGetCRUD = async(req, res) => {
    let data = await CRUDService.getAllUsers()
    console.log('-------------');
    console.log(data);
    console.log('-------------');
    return res.render('displayCRUD.ejs', {
        dataTable : data
    })
}


module.exports = {
    getHomePage: getHomePage, 
    getCRUD : getCRUD,
    getPost: getPost,
    displayGetCRUD : displayGetCRUD,
}