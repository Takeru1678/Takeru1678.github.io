let rand = Math.random();
let cpu;
let hands = ['グー','チョキ','パー'];
function ja(user)
{
    console.log('あなたの手は',hands[user],'です');
    if(rand<0.33)
    {
        cpu=0;
        console.log("cpuの手はグーです")
    }
    else if(rand>0.33&&rand<0.66)
    {
        cpu=1;
        console.log("cpuの手はチョキです")
    }
    else
    {
        cpu=2;
        console.log("cpuの手パーです")
    }
    if(user==0&&cpu==1||user==1&&cpu==2||user==2&&cpu==0)
    {
        console.log("あなたの勝ち")
    }
    else if(user==0&&cpu==0||user==1&&cpu==1||user==2&&cpu==2)
    {
        console.log("あいこです")
    }
    if(user==0&&cpu==2||user==1&&cpu==0||user==2&&cpu==1)
    {
        console.log("あなたの負け")
    }

}