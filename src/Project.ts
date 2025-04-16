export class Project
{
    name: string = "";
    description: string = "";   
    logo: string = "";
    image: string = "";
    backgroundColor: string = "";
    textColor: string = "";
    category: string = "";

    constructor(name:string, description: string, logo:string, image: string, backgroundColor:string, textColor:string, category:string)
    {
        this.name = name;
        this.description = description;
        this.logo = logo;
        this.image = image;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.category = category;
    }
}