import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor() {}
	
	//ATRIBUTOS DA CLASSE
	postTitle:string;
	postId:number; //identificador do post
	userId:number; //identificador do usuário que fez o post
	userName:string;
	attachment:boolean; //indica se o post acompanha anexo
	contentText:string; //conteúdo textual do post
	contentFile:string; //anexo do post
	date:string; //data que o post foi feito
	spoiler:boolean; //indica se há spoiler
	likeState:boolean; //indica se o usuario curtiu o post
	dislikeState:boolean; //indica se o usuario deu dislike no post
	likes:number; //qtd de likes
	dislikes:number; //qtd de dislikes

	posts: object[] = [

		{ postTitle: "The Flash: Nora West-Allen linda nunca critiquei",
		postId: 1,
		userId: 4,
		userName: "anamartins",
		attachment: true, 
		contentText: "Quinta temporada é a melhor, com a filha dele.", 
		contentFile: "quintatemporada.jpg",
		date: "27/01/2020", 
		spoiler: true,
		likeState: true,
		dislikeState: false,
		likes: 20,
		dislikes: 3},

		{ postTitle: "Riverdale é ótima",
		postId: 2,
		userId: 3,
		userName: "caiolima",
		attachment: false, 
		contentText: "Veronica e Archie lindos", 
		contentFile: "none",
		date: "28/01/2020", 
		spoiler: false,
		likeState: false,
		dislikeState: false,
		likes: 12,
		dislikes: 0},

		{ postTitle: "Prison Break: melhor série da vidaaaaa",
		postId: 3,
		userId: 14,
		userName: "carloseduardo",
		attachment: true, 
		contentText: "Michael Scofield sua inteligência me inveja", 
		contentFile: "prison-break.jpg",
		date: "30/01/2020", 
		spoiler: false,
		likeState: false,
		dislikeState: false,
		likes: 45,
		dislikes: 0},

		{ postTitle: "Breaking Bad é horrível",
		postId: 4,
		userId: 7,
		userName: "lanafernandes",
		attachment: false, 
		contentText: "Pior série que eu já vi na vida.", 
		contentFile: "none",
		date: "29/01/2020", 
		spoiler: false,
		likeState: true,
		dislikeState: false,
		likes: 25,
		dislikes: 7},

		{ postTitle: "Vis a vis é supervalorizada",
		postId: 5,
		userId: 8,
		userName: "rebeccaferreira",
		attachment: true, 
		contentText: "Achei o relacionamento da Cachinhos e da Macarena forçado", 
		contentFile: "visavis.jpg",
		date: "31/01/2020", 
		spoiler: true,
		likeState: true,
		dislikeState: false,
		likes: 7,
		dislikes: 8}];

	/* MÉTODOS DA CLASSE */

	//curtir o post
	likePost(Post:any):void{

		if(Post.likeState){
			Post.likes = Post.likes - 1;
			Post.likeState = false;
		}
		else{
			Post.likes = Post.likes + 1;
			Post.likeState = true;
			if(Post.dislikeState){
				Post.dislikeState = false;
				Post.dislikes = Post.dislikes - 1;
			}
		}
	}

	//descurtir o post
	unlikePost(Post:any):void{

		if(Post.dislikeState){
			Post.dislikes = Post.dislikes - 1;
			Post.dislikeState = false;
		}
		else{
			Post.dislikes = Post.dislikes + 1;
			Post.dislikeState = true;
			if(Post.dislikeState){
				Post.likeState = false;
				Post.likes = Post.likes - 1;
			}
		}
	}

}
