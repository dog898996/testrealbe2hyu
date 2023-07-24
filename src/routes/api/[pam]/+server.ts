import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import Bard, { askAI } from "bard-ai";
    const COOKIE_KEY = "YwgT2ca8XnHdyuqAq637Kh76uqKz9CZcHFKG249TIacHxm4yxmI_21Xo1ThYUK6hoO_DVQ."

    await Bard.init(COOKIE_KEY); //바드 대화내역 초기화

export const GET:RequestHandler = async ({params}) => {
    let myConversation = new Bard.Chat();
    const search = (params.pam)?.replaceAll("_", " ");
    if(!search){
        return new Response('무언가 잘못되었습니다...!')
    }
    if (search == 'resetbard0907'){
            myConversation = new Bard.Chat();
            return new Response('초기화 성공')

    }
    let res = await myConversation.ask(search);    
    console.log(res)
    if(typeof res === 'string'){
            return new Response(res)

    } else{
        return new Response('이건 서버 잘못이네요..')
    }

    
    
}