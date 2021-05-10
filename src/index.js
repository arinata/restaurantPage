import pageLoad from './pageLoad';
import { clearContent, displayOurValues, displayMenu, displayContactUs} from './pageLoad';

pageLoad();

document.getElementById("ourStory").addEventListener('click',function(e){
    clearContent();
    displayOurValues();
});

document.getElementById("menu").addEventListener('click',function(e){
    clearContent();
    displayMenu();
});

document.getElementById("contact").addEventListener('click',function(e){
    clearContent();
    displayContactUs();
});