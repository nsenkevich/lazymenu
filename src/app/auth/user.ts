
export interface UserInterface {
    uid: string;
    email: string;
    name?: string;
    avatar?: string;
    hasAllergies?: string;
    allergies?: Array<string>;
    diet?: Array<string>;
    role?: string;
    stringify?: any;
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
        if (allergies.length != 0) {
            this.hasAllergies = 'yes'
        }
        this.hasAllergies = 'no';
    }

    public setDiet(diet: Array<string>): void {
        this.diet = diet;
    }

    public makeAdmin() {
        this.role = 'admin';
        return this;
    }

    public isGuest(): boolean {
        return !this.role;
    }

    public isSubscriber(): boolean {
        return this.role == 'subscriber';
    }

    public isAdmin(): boolean {
        return this.role == 'admin';
    }
    
    public canRead(): boolean {
        return this.checkAuthorization(['admin', 'subscriber'])
    }

    public canEdit(): boolean {
        return this.checkAuthorization(['admin'])
    }

    public canDelete(): boolean {
        return this.checkAuthorization(['admin'])
    }

    private checkAuthorization(allowedRoles: string[]): boolean {
        for (const role of allowedRoles) {
            if (this.role == role) {
                return true
            }
        }
        return false
    }

    public stringify(): User {
        return JSON.parse( JSON.stringify(this));
    }
}