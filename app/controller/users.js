const users = [
    {
        id: 1,
        name: 'Bambang S'
    },
    {
        id: 2,
        name: 'Cho Miyeon'
    }
]

module.exports = {
    get(req, res){
        let result = users;
        if(!users.length) res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data Empty'
        })

        const { search } = req.query;

        if(search){
            result = users.filter((el) => {
                return el.name.toLowerCase().includes(search)
            })
        }

        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: result
        })
    },
    getById(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const user = users.find((el) => el.id ===
            +req.params.id)
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: user
        })
    },
    create(req, res){
        const { name } = req.body;
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: name
        }

        users.push(newUser)
        console.log(users);

        res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data ditambahkan!',
            data: newUser
        })
    },
    update(req,res){
        const { id } = req.params;
        const { name } = req.body;
    
        if (!id) {
            return res.status(400).json({
                status: 'fail',
                code: 400,
                message: 'Bad Request! id is required'
            });
        }
    
        if (!name) {
            return res.status(400).json({
                status: 'fail',
                code: 400,
                message: 'Bad Request! Name is required'
            });
        }
    
        const userIndex = users.findIndex((el) => el.id === +req.params.id);
        console.log(userIndex)
    
        users[userIndex].name = name;
    
        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'User berhasil diperbarui',
            data: users[userIndex]
        });
    },
    destroy(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const userIndex = users.findIndex((el) => el.id ===
            +req.params.id)
    
        users.splice(userIndex, 1);
    
        res.status(204).json({ 
            status: 'success', 
            code: 204, 
            message: 'Success Data terhapus!',
        })
    },
}