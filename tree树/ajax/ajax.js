class Api {
    // 有的ajax请求是会做鉴权的，constructor里放这些鉴权参数
    // constructor (token) {
    //   this.token =token;
    // }
    // opt 里存放特定请求需要的参数，如url等
    getUser(opt) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    //    headers:{
                    //         token:this.token
                    //    },
                    url: opt.url,
                    methods: 'get',
                    // data: opt.data,
                    success: function(data) {
                        resolve(data);
                    },
                    error: function(error, status) {
                        reject(error);
                    }
                })
            })
        }
        //其他API定义区
}