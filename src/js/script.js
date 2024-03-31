// document.getElementById('btn360').addEventListener('click' , function(){
//     var gifContainer = container.getElementById('gifContainer');
//     gifContainer.classList.toggle('hidden');
// })

function open360(){
    document.getElementById('imgContainer').classList.add('hidden');
    document.getElementById('btnOpen360').classList.add('hidden');
    document.getElementById('btnClose360').classList.remove('hidden');
    document.getElementById('gifContainer').classList.remove('hidden');
}

function close360(){
    document.getElementById('imgContainer').classList.remove('hidden');
    document.getElementById('btnOpen360').classList.remove('hidden');
    document.getElementById('btnClose360').classList.add('hidden');
    document.getElementById('gifContainer').classList.add('hidden');
}