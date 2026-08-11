class College {

    readonly collegeName: string = "SVECW";

    static location: string = "Bhimavaram";

    show(): void {
        console.log(this.collegeName);
        console.log(College.location);
    }
}

let c = new College();

c.show();