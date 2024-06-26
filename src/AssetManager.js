class AssetManager
{
    constructor()
    {
        this.successCount=0;
        this.errorCount=0;
        this.cache=[];
        this.downloadQueue=[];
    }
    queueDownload(path)
    {
        console.log("Queueing "+path);
        this.downloadQueue.push(path);
    };
    isDone()
    {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };
    downloadAll(callback)
    {
        if(this.downloadQueue.length === 0) setTimeout(callback,10);
        for (var i =0;i<this.downloadQueue.length;i++)
        {
            var path = this.downloadQueue[i];
            console.log(path);

            var ext = path.substring(path.length-3);

            switch(ext)
            {

            case 'png':
                var img = new Image();
                
                
                img.addEventListener("load", () => {
                    console.log("Loaded " + img.src);
                    this.successCount ++;
                    if (this.isDone()) callback();
                });

                img.addEventListener("error",() => {
                    console.log("Error loading "+img.src);
                    this.successCount++;
                    if(this.isDone()) callback();
                });

                img.src = path;
                this.cache[path] = img;
                break;
            
            case 'mp3':
                var aud = new Audio();
                aud.addEventListener("loadeddata", () => {
                    console.log("Loaded " + aud.src);
                    this.successCount ++;
                    if (this.isDone()) callback();
                });

                aud.addEventListener("error",() => {
                    console.log("Error loading "+aud.src);
                    this.successCount++;
                    if(this.isDone()) callback();
                });
                aud.addEventListener("ended",() => {
                    aud.pause();
                    aud.currentTime = 0;
                });
                aud.src = path
                aud.load();
                this.cache[path] = aud;
                break;

            }
            


        }
    };
    getAsset(path)
    {
        return this.cache[path];
    };

    playAsset(path)
    {
        let audio = this.cache[path];
        audio.currentTime = 0;
        audio.play();
    };

    setAssetLoop(path)
    {
        let audio = this.cache[path];
        audio.addEventListener("ended",() =>{
            aud.currentTime = 0;
            aud.play();
        });
    }
}