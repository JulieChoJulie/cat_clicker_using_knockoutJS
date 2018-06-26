var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('http://flickr.');
    this.catLevel = ko.observable('newborn');
    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
        if(this.clickCount() >= 100){
            this.catLevel('infant');
        } else if (this.clickCount() >= 10 && this.clickCount < 100){
            this.catLevel('infant');
        }
    };
    // this.nickName = ko.observableArray([
    //     {name: 'tom'},
    //     {name: 'orange'},
    //     {name: 'nabi'},
    //     {name: 'goldy'}
    // ]);
    this.nickName = ko.observableArray([
        'tom',
        'orange',
        'nabi',
        'goldya',
    ])
}

ko.applyBindings(new ViewModel());