var forbid = function() {
    print("=======   Warning   =======   ");
    print("Forbidden to  dropping !");
    print("Please contact operators !");
    print("===========================    ");
}
db.dropDatabase = DB.prototype.dropDatabase = forbid;
DBCollection.prototype.drop = forbid;
DBCollection.prototype.dropIndex = forbid;
DBCollection.prototype.remove = forbid;
