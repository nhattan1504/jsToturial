
function circle(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
};
circle.prototype.isOverlapped=function(obj){
    var distance=Math.sqrt(Math.pow(this.x-obj.x,2)+Math.pow(this.y-obj.y,2));
    if(this.r+obj.r>distance){
        return -1
    } else if(this.r+obj.r<distance){
        return 1
    } else return 0
}
module.exports = circle; 