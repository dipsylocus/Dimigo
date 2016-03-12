function Stream(items){
    this.items = items;
    this.works = [];
}

Stream.prototype = {
    get: function(i){
        var item = this.items[i];
        if(item === undefined) return;
        for(var w = 0; w < this.works.length; w++){
            var result = this.works[w](item);
            if(result === undefined) return;
            item = result;
        }
        return item;
    },
    forEach: function(f){
        for(var i = 0; i < this.items.length; i++){
            var item = this.get(i);
            if(item === undefined) continue;
            if(f(item) === true) break;
        }
    },
    toArray: function(){
        var array = [];
        this.forEach(function(item){ array.push(item); });
        return array;
    },
    count: function(){
        var count = 0;
        this.forEach(function(item){ count++; });
        return count;
    },
    filter: function(f){
        this.works.push(function(item){ if(f(item)) return item; });
        return this;
    },
    map: function(f){
        this.works.push(f);
        return this;
    },
    peek: function(f){
        this.map(function(item){ f(item); return item; });
        return this;
    },
    allMatch: function(f){
        var allMatch = true;
        this.forEach(function(item){
            if(!f(item)) return !(allMatch = false);
        });
        return allMatch;
    },
    anyMatch: function(f){
        var anyMatch = false;
        this.forEach(function(item){
            if(f(item)) return anyMatch = true;
        });
        return anyMatch;
    },
    noneMatch: function(f){
        return !this.anyMatch(f);
    },
    findFirst: function(f){
        var found = null;
        this.forEach(function(){
            
        });
    }
};
