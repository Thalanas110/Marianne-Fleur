document.addEventListener('DOMContentLoaded', () => {
    // Poem data with titles, content and authors
    const poems = {
        "1": {
            title: "Unang Tagpo",
            content: `Sa unang sulyap, mundo'y tumigil,\nTinig mong kay lamyos, di malilihim.\nTila ang hangin, pangalan mo'y awit,\nDamdamin kong payapa, biglang nag-init.\n\nMata mong bituin, ilaw sa gabi,\nSa 'yong pagdaiti, natunaw ang pighati.\nNgiti mong kaytamlay, aking tinanaw,\nNgunit puso'y lumundag, walang pag-aalintanaw.\n\nSa iyong piling, oras ay mabagal,\nParang panaginip, tila di tunay.\nNgunit sa puso ko, 'di maikakaila,\nAng unang tagpo, pag-ibig na dala.\n\nAt kung uulitin, muli't muli,\nSa'yo lang ako, wala ng hihigit.\nPagkat sa unang sulyap, nahanap ko,\nAng simula ng 'di matatapos na kwento.`,
            author: "Anonymous"
        },
        "2": {
            title: "Pangungulila",
            content: `Saan ka na ba, aking mahal?\nHapdi ng lungkot, kay bigat, kay lalim.\nSa pag-idlip, panaginip ang hantungan,\nUpang sa piling mo'y muli kong maramdaman.\n\nHaplos mong banayad, yakap na kay init,\nHinahanap-hanap sa gabing tahimik.\nMga titig mong kay lambing sa dilim,\n'Di ko matanto kung kailan darating.\n\nSa bawat sandali ng pananabik,\nTila ang mundo'y nawawalan ng tinig.\nSana'y bumalik, kahit sa saglit,\nPawiin ang lungkot, puso'y mapanatag.\n\nNgunit sa dilim, pangalan mo'y awit,\nIsang bulong ng pag-asang saglit.\nHanggang sa muli, pagkat 'di matatapos,\nPangungulila kong sa'yo lang nakatali.`,
            author: "Anonymous"
        },
        "3": {
            title: "Walang Kupas",
            content: `Kay tagal na ng ating pagsinta,\nNgunit sa mata mo'y may ningning pa.\nWalang kupas, tulad ng una,\nBawat saglit, kay tamis ng alaala.\n\nAng ganda mo, di kayang ilarawan,\nSa bawat sandali, tila ako'y natangay.\nNgiti mong maliwanag, parang umaga,\nDamdamin ko'y 'di na nagsawa.\n\nKahit lumipas ang oras at araw,\nIkaw pa rin ang aking tanaw.\nWalang lumipas, walang nagbago,\nAng alindog mo'y tila walang hangganan ito.\n\nAt sa habang panahon, ipapangako,\nAng tingin ko sa'yo, di kukupas ito.\nPagkat ang ganda mo, hindi panandali,\nBagkus, panghabang-buhay, walang kapantay.`,
            author: "Anonymous"
        },
        "4": {
            title: "Tagumpay at Pait",
            content: `Sa bagyong dumaan, tayo'y magkasama,\nHawak-kamay, 'di natin pinabaya.\nHinampas man ng sigwa at pagsubok,\nPag-ibig natin, nanatiling matibay.\n\nLuha't dalamhati, 'di natin ininda,\nPagkat pag-ibig natin, matapang, dakila.\nSa bawat unos, 'di ako bumitiw,\nSapagkat ikaw ang pangakong 'di lilimutin.\n\nAng ginhawa't galak, pinaghirapan,\nSa sakit at dusa, tayo'y natuto.\nSa hirap at ginhawa, ikaw at ako,\nTuloy ang laban, walang susuko.\n\nAt sa dulo ng lahat ng pagsubok,\nIsang bagay lang ang tunay kong natutunan.\nNa kahit saan, anuman ang dumaan,\nTayo pa rin, 'di matinag kailanman.`,
            author: "Anonymous"
        },
        "5": {
            title: "Mahal Kita",
            content: `Mahal kita, higit pa sa salita,\nDi kayang ilarawan, kahit ng tadhana.\nBawat galaw, bawat tingin mong payapa,\nSa puso ko, ikaw ang ligaya.\n\nMahal kita, hindi lang saglit,\nKundi habang buhay, kahit anong pait.\nSa bawat sigaw ng puso kong sabik,\nPangalan mo lang ang nais masambit.\n\nMahal kita, higit sa araw,\nNa di napapagod, laging nagniningning.\nHigit sa tala, na kay kinang,\nHindi magbabago, mananatili kailanman.\n\nMahal kita, yan lang ang alam,\nKahit sa dulo ng walang hanggan.\nWala nang iba, ikaw lang, sinta,\nIkaw ang dahilan, ikaw ang lahat.`,
            author: "Anonymous"
        },
        "6": {
            title: "Bukas Natin",
            content: `Isipin mo, mahal, ang ating hinaharap,\nSa iisang bubong, walang pangamba.\nTatawanan ang hirap, sabay nating haharapin,\nAng buhay na pinangarap natin.\n\nMga anak nating may mata mong kay ganda,\nSa kanila'y ihahatid ang ating alaala.\nSabay nating bubuuin ang tahanang payapa,\nPunong-puno ng ligaya't pag-ibig na dakila.\n\nAraw-araw tayong gigising na magkasama,\nSa init ng yakap, sa titig ng pagsinta.\nWalang takot, walang pangamba,\nPagkat sa piling mo, ang mundo'y kumpleto na.\n\nAt sa bawat dapithapon ng ating buhay,\nHawak-kamay pa rin, tulad ng simula.\nPag-ibig nating walang hanggan,\nHanggang sa huling paghinga.`,
            author: "Anonymous"
        },
        "7": {
            title: "Hihintayin Kita",
            content: `Kung anong tagal ng paghihintay,\nGanun din ang pag-ibig kong tunay.\nKahit lumipas ang maraming taon,\nDamdamin ko sa'yo'y di mababago kahit kailan.\n\nHihintayin kita sa ilalim ng buwan,\nHabang bituin ay saksing taimtim.\nKahit 'di ko tiyak kung kailan babalik,\nMahal pa rin kita, tulad ng dati.\n\nAt kung dumating ang araw na muli kang bumalik,\nSa bisig kong ito, muli kang mahaplit.\nWalang galit, walang pag-aalinlangan,\nPag-ibig ko sa'yo, hindi naglaho kailanman.\n\nKaya kung marinig mo, tandaan mo sana,\nNa sa dulo ng bawat gunita,\nSa iyo lang, habang buhay—\nMahal na mahal kita.`,
            author: "Anonymous"
        }
    };

    const poemSelector = document.getElementById('poemSelector');
    const poemDisplay = document.getElementById('poemDisplay');
    
    // Update the poem display based on selection
    function displayPoem() {
        const selectedPoemId = poemSelector.value;
        
        if (selectedPoemId) {
            const poem = poems[selectedPoemId];
            
            // Update the poem display with title, content and author
            poemDisplay.innerHTML = `
                <div class="poem-content">
                    <div class="poem-title">${poem.title}</div>
                    ${poem.content}
                    <div class="author">- ${poem.author}</div>
                </div>
            `;
            
            poemDisplay.classList.remove('empty');
            
            // Scroll to the top of the poem
            poemDisplay.scrollTop = 0;
        } else {
            // Display empty state message
            poemDisplay.innerHTML = '<div class="empty-state">Pumili ng tula upang ipakita dito...</div>';
            poemDisplay.classList.add('empty');
        }
    }


    // Initial setup
    poemSelector.addEventListener('change', displayPoem);
    displayPoem();
});
