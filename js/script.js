var data = '{"divHoldingTitle":{"title":"Dr. Norman Borlaug","textSave":"The man who saved a billion lives"},"imageHolder":{"theBigPicture":"./images/smiling-people.jpg","textUnderPicture":"Dr. Norman Borlaug, second from left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger."},"statement":{"statementText":"<i>Borlaug life and achievement are testimony to the far-reaching contribution that one man is towering intellect, persistence and scientific vision can make to human peace and progress.</i>","primeMinister":"-- Indian Prime Minister Manmohan Singh"},"wikiEntry":{"bottomText":"If you have time, you should read more about this incredible human being on his "}}';

$(document).ready(function(){

    var obj = JSON.parse(data);

    mainDiv(obj);
});

function mainDiv(obj){
    
    $('.title').text( obj.divHoldingTitle.title);
    $('.text-save').text(obj.divHoldingTitle.textSave);
    $('.the-big-picture').attr("src",obj.imageHolder.theBigPicture);
    $('.text-under-picture').text(obj.imageHolder.textUnderPicture);
    $('.statement-text').html(obj.statement.statementText);
    $('.prime-minister').text(obj.statement.primeMinister);
    $('.bottom-text').html(obj.wikiEntry.bottomText + "<a href=\"https://en.wikipedia.org/wiki/Norman_Borlaug\" target=\"_blank\">Wikipedia entry</a>");

    //for(i in obj.bigList.itemList){
    
        //$('li').html(obj.bigList.itemList[i].item);
    //}

};
