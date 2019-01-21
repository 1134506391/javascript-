var Dictionary = function() {
    var items = {};
    // 检查键
    this.has = function(key) {
            return key in items;
        }
        // 添加键值对
    this.set = function(key, value) {
            items[key] = value;
        }
        //通过键移除元素
    this.delete = function(key) {
            if (this.has(key)) {
                delete items[key];
                return true;
            }
            return false;
        }
        // 由键获取值
    this.get = function(key) {
            return this.has(key) ? items[key] : undefined;
        }
        //以列表返回字典值
    this.values = function() {
            var values = [];
            for (var k in items) {
                if (this.has(k)) {
                    values.push(items[k])
                }
            }
            return values;
        }
        //获取全部键名
    this.keys = function() {
            return Object.keys(items);
        }
        //获取私有变量items
    this.getItems = function() {
        return items;
    }
}