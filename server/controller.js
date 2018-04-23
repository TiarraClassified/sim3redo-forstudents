module.exports={
    addUser: (req,res)=>{
        let {un,pw} = req.body;
        let pic = 'ivegotnobody';
        req.app.get('db').addUser([un,pw,pic]).then(user=>{
            // console.log(user, 'new user')
            res.send(user[0])
        }
        ).catch(e=>console.log(e))
    },
    login: (req,res)=>{
        let {un, pw} = req.body;
        req.app.get('db').findUser([un, pw]).then(user=>{
            ((user.length>0) ? res.send(user[0]) : res.send("nope"));
        }).catch(e=>console.log(e))
    }
}