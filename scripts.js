function switchTab(type) {
            const tabCerdo = document.getElementById('tab-cerdo');
            const tabRes = document.getElementById('tab-res');
            const listaCerdo = document.getElementById('lista-cerdo');
            const listaRes = document.getElementById('lista-res');

            if (type === 'cerdo') {
                tabCerdo.classList.add('active');
                tabRes.classList.remove('active');
                listaCerdo.style.display = 'block';
                listaRes.style.display = 'none';
            } else {
                tabRes.classList.add('active');
                tabCerdo.classList.remove('active');
                listaRes.style.display = 'block';
                listaCerdo.style.display = 'none';
            }
        }

        document.getElementById('btn-vcard').addEventListener('click', () => {
            const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:CARNICERÍA La Milagrosa\nORG:Carnicería La Milagrosa\nTEL;TYPE=CELL:+573242895038\nNOTE:Promociones y Domicilio Gratis - Sector Bombillo Rojo\nEND:VCARD`;
            const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Carniceria_La_Milagrosa.vcf';
            a.click();
            URL.revokeObjectURL(url);
        });
