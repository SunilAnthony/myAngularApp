import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.components.html' ,
    providers: [PostsService]
})
export class UserComponent  {
   name: string;
   email: string;
   address: address;
   hobbies: string[];
   showHobbies: boolean;
   posts : Post[];

   constructor(private postsService: PostsService){
       
       this.name = 'John Doe';
       this.email = 'john@gmail.com';
       this.address = {
        street: '2213 Scrub Jay rd',
        city: 'Apopka',
        state: 'FL',
        }
        this.hobbies =['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
        

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });

   }
   toggleHobbies(){
       if(this.showHobbies == true){
            this.showHobbies = false;
       }
       else{
            this.showHobbies = true;
       }
       
   }
   addHobby(hobby:string){
       this.hobbies.push(hobby);
   }
   deleteHobby(i: number){
       this.hobbies.splice(i, 1);
   }
}

interface address{
    street: string;
    city: string;
    state: string;
}
interface Post{
    id: number;
    title: string;
    body: string;
}
