var BackwardsActionIterator = /** @class */ (function () {
    function BackwardsActionIterator(_currentActionNode) {
        this._currentActionNode = _currentActionNode;
    }
    BackwardsActionIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    BackwardsActionIterator.prototype.next = function () {
        var curr = this._currentActionNode;
        if (!curr || !curr.value) {
            return { value: null, done: true };
        }
        //1. move through each item in the list
        this._currentActionNode = curr.prev;
        //2. return each item
        return { value: curr.value, done: false };
    };
    return BackwardsActionIterator;
}());
var action1 = { type: "LOGIN" };
var action2 = { type: "LOAD_POSTS" };
var action3 = { type: "DISPLAY_POSTS" };
var action4 = { type: "LOGOUT" };
var actionNode1 = {
    prev: null,
    next: null,
    value: action1
};
var actionNode2 = {
    prev: actionNode1,
    next: null,
    value: action2
};
actionNode1.next = actionNode2;
var actionNode3 = {
    prev: actionNode2,
    next: null,
    value: action3
};
actionNode2.next = actionNode3;
var actionNode4 = {
    prev: actionNode3,
    next: null,
    value: action4
};
actionNode3.next = actionNode4;
var backwardsActionsList = new BackwardsActionIterator(actionNode4);
for (var _i = 0, backwardsActionsList_1 = backwardsActionsList; _i < backwardsActionsList_1.length; _i++) {
    var action = backwardsActionsList_1[_i];
    console.log(action.type);
}
