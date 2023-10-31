export class ComtorHtml {
    private tag: string = null;
    private txt : string = null;
    private isText: boolean;
    private childs: ComtorHtml[];

    constructor(tag_txt: string, isText:boolean = false) {
        this.isText = isText;
        if (!isText){
            this.tag = tag_txt;
            this.childs = [];   
        }
        else {
            this.txt = tag_txt;
        }
    }


    getHtml(): Node  {
        if (this.isText){
            return document.createTextNode(this.txt);
        }
        var resp = document.createElement(this.tag);

        this.childs.forEach(child => {
            resp.appendChild(child.getHtml());
        });
        return resp;
        
    }

    add(child: ComtorHtml): void {
        this.childs.push(child);
    }
}
