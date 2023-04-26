let swr= $('button');
let swrsearchingarr = [
    "ALFATIHA","ALBAQARAH","ALIMRAN","AnNisa’","AlMa’idah","AlAn’am"," AlA’raf","AlAnfal"," AtTaubah","Yunus","Hud","Yusuf","ArRa’d","Ibrahim"
    ,"AlHijr","AnNahl","Al-Isra’","Al-Kahf","Maryam","Ta-Ha","AlAnbiya’","Al-Haj","AlMu’minun","AnNur","AlFurqan"," AshShu’ara","AnNaml","Al-Qasas"
    ,"AlAnkabut","ArRum","Luqman","AsSajdah","AlAhzab","Saba’","AlFatir","YaSin","AsSaffah","Sad","AzZumar","Ghafar","Fusilat","AshShura","AzZukhruf"
    ,"AdDukhan","AlJathiyah","AlAhqaf","Muhammad","AlFat’h","AlHujurat","Qaf","AdzDzariyah","AtTur","AnNajm","AlQamar","ArRahman ","AlWaqi’ah"
    ,"AlHadid","AlMujadilah ","AlHashr","AlMumtahanah","AsSaf","AlJum’ah","AlMunafiqun","AtTaghabun","AtTalaq","AtTahrim","AlMulk","AlQalam"
    ,"AlHaqqah","AlMa’arij","Nuh","Al-Jinn","AlMuzammil","AlMudaththir","AlQiyamah","AlInsan","AlMursalat","AnNaba’","AnNazi’at","Abasa","AtTakwir"
    ,"AlInfitar","AlMutaffifin","AlInshiqaq","AlBuruj","AtTariq","AlA’la","AlGhashiyah","AlFajr","AlBalad","AshShams"," AlLayl"
    ,"AdhDhuha ","AlInshirah ","AtTin","Al‘Alaq","Al‘Alaq","AlBayinah","AzZalzalah","Al‘Adiyah "," AlQari’ah","AtTakathur","Al‘Asr"
    ,"AlHumazah","AlFil"," Quraish","AlMa’un","AlKauthar","AlKafirun","AnNasr","AlMasad","AlIkhlas","AlFalaq","AnNas"
];
$('#search').on('change', function(){
    for(let i = 0; i < 144; i++){
        $(swr[i]).show(400);
    }
    let val = $('#search').val().toLowerCase();
    for(let i = 0; i < 144; i++){
        if(!(swrsearchingarr[i].toLowerCase().includes(val)))
        {
                $(swr[i]).hide(500)
        }
}
}
);

for(let i=0;i<144;i++){
    $(swr[i]).click(function () { 
        $('.section2').removeClass('d-none');
        $('.container').animate({
            left:'-200%'
        },'slow')
        $('.section2').animate({
            left:'0%',
            right:'0%',
            transition:'translatex(-50%)'
        },'slow')
        $('.content').height('fit-content');
        $('.section2').width('100%');
        $('.content .container').hide(1000);
        quran(i+1);
    });
}



////////quran//////////
let sura=6;

async function quran(aya){

    await fetch(`https://quranenc.com/api/v1/translation/sura/english_saheeh/${aya}`)
    .then((response) => response.json()).then((result) =>{
        sura=result.result;
    });
        displaySwra();
    
}

function displaySwra(){
    for(let i=0;i<sura.length;i++){
        let x =sura[i].arabic_text;
                $('.section2').append(`
                <div class="create">
                <button class="translate">Translate</button>
                <div class="text">
                ${i+1}-${x}
                </div>
                </div>
                `)  
        }
        translation();
}
        //translation
function translation(){
    let translate=document.querySelectorAll(".translate");
let text=document.querySelectorAll(".text");
for(let i=0; i<sura.length;i++){
        $(translate[i]).click(function () {  
            
            if(text[i].innerText==`${sura[i].translation}`){
                text[i].innerText=`${i+1}-${sura[i].arabic_text}`;
            }
            else{
                text[i].innerText=`${sura[i].translation}`;
            }
    })
}
}
//translation
$('.back').click(function () { 
    $('.create').hide(500);
    $('.create').remove(3000);
    $('.section2').animate({
        right:'-200%',
        left:'200%'
    })
    $('.container').show(500);

    if($('.content').width()< 900){
        $('.container').animate({
            left:'4%',
            transition:'translatex(-50%)'
        })
    }
    if($('.content').width()> 900){
        $('.container').animate({
            left:'7%',
            transition:'translatex(-50%)'
        })
    }
    $('.section2').hide();
});




////////quran//////////