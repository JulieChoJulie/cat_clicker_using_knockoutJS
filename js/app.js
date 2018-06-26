var ViewModel = function(){
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function(){
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};

var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('http://flickr.');
    this.catLevel = ko.observable('newborn');
    this.nickName = ko.observableArray([
        'tom',
        'orange',
        'nabi',
        'goldya',
    ]);
    this.catLevel = ko.computed(function(){
        if(this.clickCount() < 10){
            return 'newborn';
        } else if (this.clickCount() < 50) {
            return 'infant';
        } else if (this.clickCount() < 100 ) {
            return 'child';
        } else if (this.clickCount() < 200) {
            return 'teen';
        } else if (this.clickCount() < 500) {
            return 'adult';
        } else {
            return 'ninja';
        }
    }, this);
};

ko.applyBindings(new ViewModel());