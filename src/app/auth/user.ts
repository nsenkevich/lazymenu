
export interface UserInterface {
    uid: string;
    email: string;
    name?: string;
    avatar?: string;
    hasAllergies?: string;
    allergies?: Array<string>;
    diet?: Array<string>;
    role?: string;
}

export class User implements UserInterface {
    public uid: string;
    public email: string;
    public name: string;
    public avatar: string;
    public hasAllergies: string;
    public allergies: Array<string>;
    public diet: Array<string>;
    public role: string;

    private constructor(uid: string, email: string) {
        this.uid = uid;
        this.email = email;
    }

    static createFromRegistration(uid: string, email: string): User {
        const user = new User(uid, email);
        user.role = 'subscriber';
        return user;
    }

    static createGuest(): User {
        const user = new User('', '');
        return user;
    }

    static createFromSocial(uid: string, email: string, name: string, avatar: string): User {
        const user = new User(uid, email);
        user.name = name;
        user.avatar = avatar;
        user.role = 'subscriber';
        return user;
    }

    public setAllergies(allergies: Array<string>): void {
        this.allergies = allergies;
        this.hasAllergies = 'no';
        if (allergies.length !== 0) {
            this.hasAllergies = 'yes';
        }
    }

    public setDiet(diet: Array<string>): void {
        console.log(diet);
        this.diet = diet;
    }

    public isAdmin(): boolean {
        return this.role === 'admin';
    }

    public canRead(): boolean {
        return this.checkAuthorization(['admin', 'editor', 'subscriber']);
    }

    public canEdit(): boolean {
        return this.checkAuthorization(['admin', 'editor']);
    }

    public canDelete(): boolean {
        return this.checkAuthorization(['admin']);
    }

    private checkAuthorization(allowedRoles: string[]): boolean {
        for (const role of allowedRoles) {
            if (this.role === role) {
                return true;
            }
        }
        return false;
    }
}