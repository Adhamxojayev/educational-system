const path = require('path')

module.exports = (userInfo, body, header) => {

    userInfo = userInfo || {}
    body = body || {}
    header = header || {}

    let links
    let data

    if(userInfo.role == 'student'){
        links = [
            {link: '/users', text: 'foydalanuvchilar'},
            {link: '/groups', text: 'guruhlar'},
            {link: '/teachers', text: 'ustozlar'},
        ]
    }else if(userInfo.role == 'admin' || userInfo.role == 'teacher'){
        links = [
            {link: '/users', text: 'foydalanuvchilar'},
            {link: '/groups', text: 'guruhlar'},
            {link: '/teachers', text: 'ustozlar'},
            {link: '/admin', text: 'admin'},
        ]
    }else{
        links = []
    }

    

    if(path.basename(body.html, '.html') == 'table'){
        data = {
            tableName1: body.tableName1 || '',
            tableName2: body.tableName2 || '',
            table: body.table
        }
    }else if(path.basename(body.html, '.html') == 'login'){
        data = {
            errorMessage: body.errorMessage || null
        }
    }else if(path.basename(body.html, '.html') == 'admin'){
        data = {
            panel: body.panel || 'table-groups.html',
            data: {
                data: body.data || [],
                pages: body.pages || 0,
                page: body.page || 0,
                admin: body.admin.admin || []
            }
        }
    }

    return [
            'index.html',
            {
                header: header.header || 'public/header.html',
                headerData: {
                    links,
                    input: userInfo.role ? true : false,
                    isLoggedIn: userInfo.role ? true : false
                },
                html: body.html || 'public/table.html',
                data
            }
        ]
    
}