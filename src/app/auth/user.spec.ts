import { User, UserInterface } from './user';
import {} from 'jasmine';

describe('User', () => {
    it('should create guest user', () => {
        expect(User.createGuest().stringify()).toEqual(Object({ uid: '', email: '' }));
    });

    it('should create user from registration', () => {
        expect(User.createFromRegistration('1', 'e@mail').stringify())
        .toEqual(Object({ uid: '1', email: 'e@mail' , role: 'subscriber'}));
    });

    it('should create user from social', () => {
        expect(User.createFromSocial('1', 'e@mail', 'Nick', 'ava').stringify())
        .toEqual(Object({ uid: '1', email: 'e@mail' , role: 'subscriber', name: 'Nick', avatar: 'ava'}));
    });

    it('should stringify user', () => {
        expect(User.createGuest().stringify()).toEqual(Object({ uid: '', email: '' }));
    });

    it('should set Allergies and hasAllergies trigger', () => {
        const user = User.createGuest();
        user.setAllergies([]);
        expect(user.stringify()).toEqual(Object({ uid: '', email: '' , allergies: [  ], hasAllergies: 'no'}));
    });

    it('should check if user is admin', () => {
        expect(User.createGuest().isAdmin()).not.toBeTruthy;
        expect(User.createGuest().makeAdmin().isAdmin()).toBeTruthy;
    });

    it('should check if user is subscriber', () => {
        expect(User.createFromRegistration('1', 'e@mail').isSubscriber()).toBeTruthy;
    });

    it('should check if user is guest', () => {
        expect(User.createGuest().isGuest()).toBeTruthy;
    });

    it('should verify if user can only read', () => {
        const user = User.createFromRegistration('1', 'e@mail');
        expect(user.canDelete()).not.toBeTruthy;
        expect(user.canEdit()).not.toBeTruthy;
        expect(user.canRead()).toBeTruthy;
    });

    it('should verify if user can do all', () => {
        const user = User.createFromRegistration('1', 'e@mail').makeAdmin();
        expect(user.canDelete()).toBeTruthy;
        expect(user.canEdit()).toBeTruthy;
        expect(user.canRead()).toBeTruthy;
    });
});
