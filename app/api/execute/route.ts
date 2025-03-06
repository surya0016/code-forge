import axios from "axios";
import { NextResponse } from "next/server";

interface ExecuteRequest {
  code: string;
  language: string;
}

interface ExecuteResponse {
  results: {
    passed?: boolean;
    output?: string;
    error?: string;
  }[];
}

export async function POST(req:Request){
  const {code, language} = await req.json();
  const wrappedCode = `
      ${code}
      // Test case
      try {
        const result = sum(2, 3); // Call the user's function
        console.log(result); // Capture the return value
      } catch (error) {
        console.error(error.message); // Capture runtime errors
      }
    `;
  try {
    const response = await axios.post('https://emkc.org/api/v2/piston/execute',{
      language,
      version: '18.15.0',
      files: [
        {
          content: wrappedCode,
        },
      ],
    });

    const output = response.data.run.output.trim();
    const expectedOutput = '5'
    const passed = output === expectedOutput;

    return NextResponse.json({
      results:[
        {
          passed,
          output,
        }
      ]
    });
  } catch (error) {
    console.error("Error executing code: ", error)
    return new NextResponse("Failed to execute code",{status:500})
  }

}

`
I have a friend name Inu in college who has his own circle with 2 girls 2 boys including him and I barely ever talked to both the girl and their name was Nina and Rika
One day my friend inu comes and tells me that "yo you pulled a girl from our college" and I was like "what!?" I asked for her name but he didn't tell me.
After pleasing him he tells the name. And in my life I would have never ever expected it to be Rika as she was very childish and a tomboy type like behaving more like a boy and hanging out with boys more 
she was girlish but not much. After hearing her name I was in a shock and on that day we gone for shopping with my friends and inu's gang where riks was also there
I ignored her that day and felt bad for her.
For two days I was in a shock that rika liked me and after processing and inu convinced me that she is a good girl and all and after convincing me I accepted her
On the next day I gave her a choclate as an apology to her and she was happy. After that day I and rika used to be together. We used to chat all night
At start I didn't liked her that much as she likes to drink alcohol and she was complete opposite of my type. But after spending some time with her I
fell in love with her eventually. I had decided that I would give my 100% for her. After some days I started to notice something that she was to close and
attached to her two best friends that are inu and the other one whose name is james. Inu and james both are my friends but she didn't had her boundaries for
male best friend and her boy fried (I), I ignored it as both the male friends are my friends and I don't have to worry about it but it hurted me.
Inu and I live in the same area we would hangout in the afternoon after college. I know that he talks to rika in the call as a best friend but it hurted me
to see him talking to her as I am there with him. I was like "why don't she calls me and have a talk with me" I ignored that to thinking that I am new guy why would she call me over his best friend
That hurted too. Whenever I was with her Inu also would be there with me. So it would be really awkward for me to do some romantic stuff with her. And if inu is not there
she would sometime talk about him as he is not there. Inu and james would emotionally black mail her saying that "Man this is our last year in this college" (mine was also the last year)
so after hearing them say that, she would get emotionall and give some attention to them and I am in the back seeing this thinking isn't mine also the last year in this college.
Then I ignore it thinking ok she's my gf I don't have to overthink it. She would never show her love for me. As I asked this about her to my friend inu he says "yeah it rare of her to show 
love and she has hard time expressing it as she doesn't show that she loves you" I was okay with that as I said to him smiling. But I wasn't okay with that as I was overthinking that
she doesn't loves me and I didn't got any reassurance from her. One day I confronted her that I need some attention to I need some reassurance too. She became emotionall
and said sorry for that I made you feel like that. I didn't wanted to ask for love as I thought but it hurted me so much that I had to tell her. This hurting continued
as she didn't showed me any love in irl  
`