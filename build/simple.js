document.addEventListener("DOMContentLoaded", function() {
  // Hover Text Logic
  const hoverTextSpan = document.getElementById('hh');

  hoverTextSpan.addEventListener('mouseover', function() {
    this.innerText = 'Bayerische Motoren Werke';
  });

  hoverTextSpan.addEventListener('mouseout', function() {
    this.innerText = '🚘BMW';
  });
      function tossBetween() {
       const ontherText = document.getElementById('bb');
       ontherText.textContent = "latest cars";
       ontherText.style.color = "white";

        setTimeout(function() { // Corrected setTimeout call
        const ontherText = document.getElementById('bb');
        ontherText.textContent = "Our-Products"; // Changed back to original text
        ontherText.style.color = "green";

          setTimeout(tossBetween, 3000);  // Recursive call for continuous toggling
        }, 3000);

      }

      tossBetween(); //  Call the function to start the toggling
      function switcher() {
  const tt = document.getElementById('jj');
  const xx = document.getElementById('mm');
  const close = document.getElementById('close');
  const menuLinks = xx.querySelectorAll('a');
  const toggleMenu = () =>{
    xx.classList.toggle('hidden');
   // xx.classList.toggle('flex')
  }
  tt.addEventListener('click',toggleMenu);
  close.addEventListener('click',toggleMenu);
  menuLinks.forEach(link => {
          link.addEventListener('click', toggleMenu);
        });
   }
  switcher();
});



 