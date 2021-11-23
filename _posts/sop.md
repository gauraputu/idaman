*last update: 23/11/2021 11:12 AM*
---
# SOM dan TOM

1. Paste SC dan order ID di OSM dengan tipe pencarian ref#.  
2. Pada kolom “ORDERID” merupakan nomor SOM dan TOM-nya. 

# Pelurusan PDA (pindah alamat)

1. Buka service, bila status issued dan ada BI bilang cancel dulu ke yg kirim. Nanti akan di input ulang plaza. Orderan pelurusan PDA yg datang nanti harusnya tidak ada BI dan status config service complete. Luruskan dengan datek yg lama.
    
bila service statusnya sudah complete
2. Minta datek lama ke HD Logic, luruskan dengan datek lama.

# Error 1003 Unable to locate any S-VLAN associated to device Name

1. Tanyakan VLAN dan Count untuk IP/nama GPON sesuai tiket ke HD logic.
2. Masuk logical device, paste nama gpon, klik ID.
3. Scroll ke bawah di bagian custom involvements, ubah involvement specification menjadi vlan_link.
4. Edit service count svlan sesuai dengan yg dikirim 
  * Bila tidak ada, klik involve pojok kiri, custom network address, isi ID dengan ID vlan yg dikirim, add Involvement specification dengan vlan link, service type sesuai tike (“Voice” , “Broadband”, “IPTV”), count sesuai yg dikirim lalu involve.
    
5. RR tiket, done

# Error 1004 Unable to locate line_profile
  

Bila tetap balik tier 3 buka uim tools, service, service management, service update, paste service, 
1005:Invalid Port_Reservation_ID in request
Cari dengan CLI, untuk semua service Copy stp, stp target, trail (jika ada), buatkan trail (jika tidak ada), buat versi baru dengan semua data yg disimpan tadi, jika service port kosong cari di ibooster. Alternatif lebih cepat gunakan dava
Error 1006
Tanya orderan, bila PSB cancel input ulang (atau bisa search no inet di uim, bila tidak ada berarti order psb, bila ada berarti modif), bila modif, samakan NCLI di uim dengan di Nossa, sesuaikan datek (stp, service port, trail), bila service disconnected


________________
1007:Unable to locate service port ODP-ARB-FD/11 FD/D01/11.01
Penyambungan perangkat di UIM terdapat dua jenis. P2p (port to port) dan d2d (device to device). Dalam konteks 1007, sambungan p2p dari odp-olt ada yg terputus. Sambungan ini perlu diperbaiki. Tabel 1 menunjukan sambungan normal odp-olt. 


Tabel 1. Connectivity dari ODP hingga OLT
Port
	Port
	Jenis Pipe
	ODP Splitter Outlet
	ODP Uplink
	Patch_Cable_Core
	ODP Cassette Downlink
	ODP Splitter Inlet
	Patch_Cable_Core
	ODC Outlet Panel Downlink
	ODP Cassette Uplink
	FTTX_Fiber
	ODC Splitter Outlet
	ODC Outlet Panel Uplink
	Patch_Cable_Core
	ODC Panel Downlink
	ODC Splitter Inlet
	Patch_Cable_Core
	FTM OA Panel Downlink
	ODC Panel Uplink
	FTTX_Fiber
	FTM EA Panel Downlink
	FTM OA Panel Uplink
	Patch_Cable_Core
	OLT
	FTM EA Panel Uplink
	Patch_Cable_Core
	

FO 1007 terjadi karena connectivity dari ODP hingga OLT ada yg terputus/tidak normal (sambungan ganda). 


Bila sambungan sudah tersambung OLT, periksa Downlink ODP yang direserve, apakah ada uplinknya atau tidak. Bila tidak ada periksa apakah benar jumlah port downlink sesuai dengan jumlah port valins, bila tidak revisi order.


Bila perlu cepat, langsung sambung sambungan terakhir dengan OLT atau revoke order, pindah odp. 


Step 1 : Search ODP di nossf-uim
Copy nilai uplink dan splitter yg kosong 


  

Periksa sambungan terakhir pada kolom downlink atau end (jika downlink tidak terlihat). Ini menandakan sambungan selanjutnya tidak ada. Buka maincore untuk 


  

  

  

  



Sambungan di ODP
  

Jika masuk ke FTTX ODP seharusnya ada 3 sub menu yaitu:
* ODP_Panel
* ODP_Panel_Interface
* FTTX_Splitter


ODP_Panel
Berisi Downlink & Uplink port ODP.
ODP_Panel_Interface
Berisi Downlink & Uplink port cassette. 
FTTX_Splitter
Splitter bisa FTTX_Splitter_1to8 atau FTTX_Splitter_1to16 tergantung jumlah port ODP di lapangan. Untuk mengecek jumlah port ODP bisa di web valins.


Nama splitter selalu “SPL-C.1-01” (tanpa tanda petik) kecuali jika dalam satu ODP ada dua splitter.
  









Sambungan di ODC
Pada ODC akan ada 3 jenis sub menu:
ODC Inlet Panel
ODC Outlet Panel
ODC 
  

Gambar 2).
1. Nama ODC
2. Nomor panel out dan portnya
3. Nomor splitter dan outnya
4. Nomor panel in dan portnya


Misal untuk baris paling atas sambungannya :


ODP cassette xx - Panel 13 port 3 downlink
Panel 13 port 3 uplink - SPL-B.1-08 outlet 3
SPL-B.1-08 inlet - Panel 2 port 12 downlink
Panel 2 port 12 uplink - FTM downlink


Di UIM berpatokan lah pada nomor panel, bukan keterangan inlet/outlet. 


Sambungan FTM/ODF
  

Gambar 3. 
1. Nomor panelnya
2. Nomor portnya 


Pada FTM port ada sesuai gambar dibawah 


←—--24 port——-> 
^
|6 port


Slotnya bisa dihitung dari atas ke bawah (1 slot = 6 port) atau dari kiri ke kanan (1 slot = 24 port).  Atau 1 slot ada 16 port, lihat file evidence. 


Format penamaan FTM itu ada dua format:
1. (STO)-01 (FTM/ODF)-(STO)-01
E.g BAB-01 ODF-BAB-01
2. (FTM/ODF)-(STO)-01
E.g ODF-BAB-01


Untuk yg ODF sambungannya ada yg langsung ke OLT ada juga yg menggunakan OA-EA
Untuk FTM sambungan selalu menggunakan OA-EA.


  

Contoh gambar 4. 
Error 1010 Unable to locate S-VLAN or M-VLAN associated to GPON03-D5-SMP-2(172.23.59.40) for IPTV_RFS service created by autodesign
Minta count dan svlannya ke logic (mas roshie ato mas akbar) masukan seperti FO 1003, RR
Error 1011 Unable to create CPE
  





Coba RR saja
Minta ODP dan port lapangan, masukan STP dan trail (buat baru, pastikan sudah di current sebelum buat trail), rr tiket, done
Jika balik tier 3 minta ip slot-port embassy, trace odp yg konek ke ip slot-port embassy, buat kan trail di odp tersebut
Error 1013
Luruskan service port dengan data ibooster, done
Error 1021
kalo 1021, ditanya mas ke yg kirim PSB,modif/hw-2p, klo psb cancel input ulang, kl modif/hw-2p moban ODP lapangan sm portnya, nanti luruskan STP dan trailnya (bila hw-2p, search by ncli dan luruskan service yg ada), lalu RR, bila balik tier 3 luruskan dengan odp inputan


Error 1022
Pastikan user account pada RFS sudah ada line profile, bila tidak ada buatkan, sesuaikan dengan CFS, buatkan trail baru
Error 1024 reservation id is missing
Revisi order
1024:One of the Mandatory Parameters are missing : CPE_Network_ID
Eskalasi ke grup inventory
#REQ  #UIM
Order MO
SC517552294
SOM : 391053164 GetTechnicalOrderTask
TOM : 391060136 GetTTTOMResponse
IN110088251
1024:One of the Mandatory Parameters are missing : CPE_Network_ID
Serial Number : ZTEGC6752BFE
CPE ID : 16


moban rekan, terima kasih 🙏🏻
1029:Reservation not found for Broadband CFS with Reservation ID : 19878380772
Cancel input ulang
Error 1032
  

1030:No Physical Port available with Name : 1-0-6-8
Service port dan atau stp tidak lurus, luruskan service port. (bila meluruskan stp, buatkan juga trail baru). Bila balik tier 3 klik ID service port, edit vendor port name menyesuaikan dengan nossa. Setelah order complete kembalikan seperti semula (jika kelupaan bisa bahaya)
Error 1033
Step 1. Cek apakah trail share dan cpe lurus, bila trail share buatkan baru, bila cpe tidak lurus dan SN tidak ada di ibooster minta ke yg kirim, RR
Step 1a. Bila balik tier 3 disconnect service RFS dan CFS sesuai dengan ticket, RR
Step 1c. Bila status service pending, lihat OSM service apa yg di add. Buang BI dan cancel-complete service, RR 
  

(lihat juga kebawah, bisa lebih dari 1 service)
Step 1d. Bila step 1c. Tetap balik tier 3, minta cancel input ulang ke inputer
Error 1035
Step 1: Cek by nomor inet apakah service yg keluar nomor CLInya sama, jika tidak edit semua service yg keluar sesuaikan CLInya.
  

Step 2: masuk ke bagian ID, hapus nama pelanggan yg lama dan ganti dengan nama pelanggan yg baru (cari di OSM nama pelanggan barunya), klik tombol associate
  

Step 3: paste CLI ke field ID, bila tidak ditemukan buat baru (masuk ke step 2b)
  

Step 2.b Bila tidak ada pilih create
  

Step 3.b pada bagian ID paste nomor CLI, pada bagian name paste nama pelanggan baru 
  

Step 4. Jika sudah selesai diganti semua RR-done


Error 1036
Step 1: sesuaikan CPE dengan iBooster
Error 1038
Copy id internet pelanggan, buka ibooster, simpan network id dan serial number, buka service, masuk rfs periksa apakah specification di cpe sudah sesuai SN ibooster, bila tidak buatkan cpe baru, simpan id inet/voice/iptv (sesuai permintaan), alter cpe, rr tiket, done bila cpe sudah sesuai SN masuk cpe, edit, tambahkan network id, rr tiket, done


Jika hanya voice masuk CPE dan isikan network ID berapa saja, RR






________________
1043 VPI is missing for Service
Masuk RFS, bagian S-Vlan -> Characteristic, isikan VPInya dengan 0 / 8
Error 1046 
1. Bila order AO Revisi order
2. Bila order MO tanya update speed dari berapa ke berapa, buka uim tools, masuk service management, service update, masukan nomor inet, lihat di tiket jenis paket yg perlu diubah, update paket service agar berlainan dengan yg di tiket
Error 1048 delete feature yg sama dengan yg nossa
Step 1: sama seperti 1049 hanya saya feature didelete, bukan di add
Error 1049 (~9 menit/case)
  



Step 1: scroll ke bawah dan copy nomornya
  



Step 2: masuk ke nossf-uim, pilih service, paste nomor CLI di kolom name lalu search
  



Step 3: klik nomor id pada baris yg berisi CFS
  



Step 4: klik version yg paling baru pada menu configuration
  

Step 5: klik menu action dipojok kanan atas lalu pilih create new version
  



Step 6: klik save and close
  



Step 7: klik kanan pada bagian feature, pilih add config item
Step 8: expand feature masukan nama feature yg dikirim
Step 9: approve-issues-complete
Step 10: RR tiket
Step 11: push OSM
Error 1053
Di nossa scroll ke bagian details, cek apakah trail share pada service yg ada di bagian detail, jika share buatkan baru, RR
Error 1054 (~3-4 menit/case )
  

Step 1: cari nomor service port pada excel list service port
  

Step 2: berpatokan pada nomor service dan nomor port, cari nomor service port
  

Step 3: paste semua informasi ke file alter.


  

Step 4: masuk ke nossf-uim, favourite, execute rule. Pilh menu alter_service_config_item, pilih file yg tadi, klik proses
  

Step 5: bila tidak ada masalah execute akan berhasil.
  



Step 6: RR tiket (complete tiket)


Error 1056 (~10 menit/case)
Copy stp & trail ke service yg tidak isi, rr, dorong




Error 1057 (~15 menit/case)
  



Step 1: scroll ke bawah dan copy nomor service yg bermasalah
  



Step 2: masuk ke nossf-uim, service, paste nomor service di field name lalu search, klik nomor id untuk bagian dengan kolom RFS
  



Step 3: klik version yg paling baru
  



Step 4: copy semua nilai kolom resources pada baris yg dikuningkan ke tempat lain untuk disimpan sementara (misal ke notepad)
  

  



Step 5: copy semua informasi yg diperlukan ke file pembuatan service trail.
  

Step 6: masuk ke nossf-uim, menu execute rule, pada rule set pilih create_service_trail_circuit, upload file yg tadi, klik proses.
  

Step 7: bila tidak ada masalah nomor service trail akan muncul, simpan nomor yg muncul sementara
  

  

Step 8: masukan semua informasi yg diperlukan ke file alter
  

Step 9: masuk ke nossf-uim, execute rule, pada ruleset pilih alter_service_config_item, upload file yg tadi, klik proses
  

Step 10: bila tidak ada masalah akan muncul tulisan records successfully
  

Step 11: masuk ke menu service dan paste nomor yg muncul pada nossa bagian detail, klik pada nomor ID yg barisnya ada RFS-nya
  

  

Step 12: pilih version yg paling baru
  

Step 13: pada pojok kanan atas klik actions, pilih create new version
  

Step 14: klik save and close
  

Step 15: pada bagian service port ubah menjadi ODP_panel lalu klik reference
  

Step 16: masukan nomor service port yg tadi disimpan, klik search, klik entry yg muncul, lalu ok
  

Step 17: selanjutnya kerjakan target, ubah dropdown menjadi FTTX_ODP, lalu klik reference
  

Step 18: masukan nomor FTTX_ODP yg disimpan tadi, klik search, klik entry yg muncul, lalu klik ok
  

Step 19: pada bagian service trail, klik assign
  

Step 20: masukan nomor service trail yg didapat tadi, klik entry yg muncul, lalu klik ok
  

Step 21: setelah itu klik tombol action pilih approve, klik lagi tombol action, klik issue, klik lagi tombol action, klik complete.
  





Step 22: RR ticket, push OSM


Error 1059
  

  

Step 1: simpan sementara trail yg ada, create new version, masukan kembali trail yg tadi, approve-issue-complete, rr ticket
Error 1060
Cari CPE dengan SN, bila tidak ada buat baru, data dari iBooster
Error 1069 
Step: masuk logical device, paste nama gpon, search
Step: edit, bagian sip proxy sesuai nossa
Eg. SIP proxy diisi : "10.0.0.10::10.0.0.40"
Step: rr
Error 1108 : Service trail :2722197464 has data services as consumers but CPE is not terminated to one of its termination point
Isikan CPE
Error 1118
Step 1. Masuk CFS create new
Step 2. Assign nomor telephone (nomor didapat dari service yg setelah NCLI, bila tidak bisa diassign minta release ulang ke mbak fije)
Step 3. Approve-issue-complete, RR
1120 VCI is missing for Service
Masuk RFS, bagian S-Vlan -> Characteristic, isikan VCInya dengan 35
Cara RR / Complete Ticket
Step 1: klik tombol sesuai urutan di gambar
  



Step 2: nanti akan muncul pop up, pilih resolve incident, lalu ok




  



Step 3: muncul pop up lagi, pilih “retry the failed task”, klik ok
  



  





The Inventory item (id=1250818504) has a configuration that is associated to another BI (id=1570023908). The configuration is not in a completed or canceled state. Therefore the action Modify cannot be applied to the Inventory item through the Business Int (~1-2 menit/case)
Buang BI, complete/cancel service, rr, done
Inventory item has an open configuration (~2-3 menit/case)
Step1 Cari CLI di nossf-uim, masuk id RFS, approve-complete, RR ticket, push OSM (bila status belum complete)


An error has occurred flushing the user transaction (~1-2menit/case)
RR ticket,done
Error Disconnect of xxxx is not allowed as yyyy configuration is not in Completed or Canceled state (~1-3 menit/case)
Buka service yyyy, complete-kan version terakhir (bila ada BI dibuang), RR tiket
Regis (~10 menit/case)
  

Search odp, buka port sesuai tele, copy odp downlink port sementara, cek apakah ada koneksi pelanggan, bila ada copy broadband kirim di bank data lalu putus port ODP, Buat cpe sesuai SN tele (network ID kosong, spec selalu generic), copy id, masuk edit copy ulang id taruh di name dan tambakah _ONT, copy dan simpan sementara, copy nomor NO_USE sementara, save and close, masuk ke pipe, ikuti gambar
  

  

Step 2: copy ID pipe sementara agar bisa kembali ke pipe summary sebelum masuk ke ke salah satu ID
  

  

Step 3: masukan nomor odp downlink yg disimpan tadi
  

Step 4: Masuk ke ID yg kedua (gunakan id pipe yg disimpan tadi bila tidak ada di recent items), create physical device, masukan nomor CPE
  

Step 5: Masuk kembali ke physical device, paste nomor cpe ke field ID dan kirim nomor odp downlink, id CPE, nomor no_use di telegram (sesuai notepad)


Step 6 bila regis error di WOC, cek odp dan OLT apakah roles (AN/STP) dan custom involvement (STO) sudah terisi atau belum, bila belum isikan
Step 7: cara add STO pada custom involvement
  

Step 8: klik involve, pilih custom object


  

Step 9: ketik nama STO pada field name, search, invovle
  

Step 10: ubah involvement spec menjadi organisation_mapping, from entity role kosong, to entity role kosong, save and close, selesai
  

Invalid resource specification. Resource you are trying to assign should be part of the Inventory Configuration Item Spec Options. (~5-15 menit/case)
  

Karena trail pada service exisisting tersambung ke OLT yg lain dari sekarang. Solusinya antara sesuaikan sambungan trail service existing ke OLT yg baru atau kembalikan ODP ke OLT yg lama
CTA Data empty No TechnicalActions on CTA response (~1-3 menit/case)
Masuk cfs, expand properties, klik kanan characteristics, ubah service status menjadi “Suspended” (tanpa tanda petik). RR done


The Inventory item (id=xxxx) has an open configuration that is not in a completed or canceled state. Therefore the action Modify cannot be applied to the Invent
Complete-kan version terakhir pada service id xxxx (bila ada BI dibuang)




Service ID xxxx already exist
  



Reply revoke fu di grup, done


Disconnect of 22526704_152431208598_INTERNET is not allowed as 22526704_152431208598_INTERNET - 2 - 2 - Se_40973849_2 configuration is not in Completed or Canceled state. A suggestion would be to try Disconnect after Cancel or Complete the configuration.]
Buka service, cancel kedua rfs dan cfs,RR
Step cancel: Masuk ke service yg issue, pojok kanan atas disasociate business interaction, current, pojok kanan atas cancel-complete


Cannot determine which service to use because multiple Services were found (40783585, 926093902,) for the External Object Id 32288101_152435900797_INTERNET.]
Disconnect-complete salah satu service (yg tidak ada BI-nya ato yg terlama)


The Topology mapping process for termination point processing failed.         
Step 1: RR, done


Business Interaction: 1593187528 was not found
Step 1: RR, done
An error occurred while creating business interaction ossintegration.
Step 1: RR, Done
An error occurred while calling process interaction
Cek penulisan entity ID, bila tidak bisa diedit entity ID yg salah buatkan service baru
240045Invalid Reference. Configuration Item CPE already has a Reference
Step 1: pastikan CPE dan target CPE kosong (bila tidak ada target CPE, tambahkan). Pastikan trail sama. Jika tetap balk tier 3 buatkan trail baru.


OSM CTA Data empty No TechnicalActions on CTA response (astinet)
Step 1: tanya apa ini MO atau tidak, jika MO minta speed lama, masuk rfs, shared params, ubah bandwidth menjadi speed lama, (jangan di complete), rr-dorong.
________________
terminationPoint == null
Minta odp dan port lapangan servicenya, buat trail, masukan
Bila balik tier 3 pastikan CPE sudah punya pipe FTTX_Drop_Cable, bila kosong sambungkan


resource == null
Putus odp lama, buatkan trail baru


CTA Data empty No TechnicalActions on CTA response
Masuk CFS, klik kanan characteristic, ubah service status menjadi “Suspended”, RR


Service ID xxxx already exists
Cancel input ulang


ALU_AMS_PORT_NT_FOUN:ServicePort Not Found / ONT Connectivity is Missing.
Moban odp dan port lapangan, Luruskan stp-trail


240045Invalid Reference. Configuration Item CPE already has a Reference.
Dereference CPE dan target pada setiap service, jika balik tier 3, cek apakah stp ada pelanggan lain, putuskan odp


Failed to invoke end component oracle.communications.inventory.webservice.ws.CTOUimPortImpl (POJO), operation=CalculateTechnicalActions -> Failed to invoke method]


RR, done


Business Interaction: xxxxx was not found
RR,done
110585Allocation or referencing of an entity 998370113 is not allowed on configuration
Trail share, di lepas cpe dan targetnya baik di servicetrail maupun di dropcore lalu RR kembali. Bila yg keluar trail lama, disconnect trail lalu buatkan baru.


Problem getting specification from the target object
RR done
The resource type PhysicalJumper with Id 843423908 / 843423886 / 843423908-1445793951 / 843423886-1445793524 is not available because the resource is already assigned.
Unassign port 843423908-1445793951 dan 843423886-1445793524. 843423908 / 843423886 adalah id physical devicenya.


1908:Region value not found for active device GPON01-D5-KML-3(172.27.104.221)
assign sto nya di logical device agar data region nya terisi, cara isi sto lihat di bagian regis


The current service status of In Service is invalid for the selected action.
Ubah status service cfs menjadi suspended kemudian status service cfs dan rfs menjadi suspend.


270138 Resources cannot be assigned in Live context when Consumer is in Business Interaction context
Trail kena BI, carikan port lain dan buatkan trail baru


Null
Cek apakah servicenya ada di UIM (FO karena sudah ada), hapus service di uim lalu cancel input ulang


Business Interaction Specification:{0} was not found.
RR done


env:Server CTA Data empty No TechnicalActions on CTA response
Masuk cfs, expand properties, klik kanan characteristics, ubah service status menjadi “Suspended” (tanpa tanda petik). RR done


The current service status of Disconnected is invalid for the selected action
Create ulang service yg disconnected


The service configuration start date of 05/24/2021 is invalid. Start date cannot be before its previous configurations start date.


Eskalasi ke grup inventory format berikut:


#REQ #UIM


Service Name : 41140343_152431215442_INTERNET_RFS  
ID : 837033447
Version: 5


The service configuration start date of 05/24/2021 is invalid. Start date cannot be before its previous configurations start date.




mohon bantuan error start date rekan agar bisa di complete-kan


Trimakasih




For input string: "1536K"
cek dirfs dan cfs di service uim biasanya ada penulisan upload atau download yang tidak sesuai (hanya boleh angka, tanpa huruf) atau service trail nya sharing


ODP gendong →  odp yg slot portnya >32 pelanggan
Datin → pelanggan indihome corporate






## List STO Datel Bangkalan
- ARB» AROSBAYA
- BEA» BLEGA
- BKL» BANGKALAN
- KML» KAMAL
- TBU» TANJUNG BUMI


## List STO Datel Pamekasan
- SPG» SAMPANG
- KPP» KETAPANG PAMEKSAN
- OMB» OMBEN
- PME» PAMEKASAN
- WRP» WARU PAMEKASAN


## List STO Datel Sumenep
- ABT» AMBUNTEN
- BAB» BATANG-BATANG
- SMP» SUMENEP
- PRG» PERAGAAN
- AJA» ARJASA
- SPK» SAPEKEN
- MSL» MASALEMBO
- SPD» SAPUDI

## Website yg dipakai
http://nossf-uim.telkom.co.id/Inventory/faces/InventoryUIShell (UIM)
https://nossa.telkom.co.id (NOSSA)
https://nossf-osmfe.telkom.co.id/ (OSM)
http://10.62.165.58/ibooster/login1.php (iBooster)
https://emas.telkom.co.id (DAVA)
http://noss.telkom.co.id/support/ (NOSS support, berisi list FO, penyebab dan cara penanganannya)
https://starclickncx.telkom.co.id (Starclick)
https://uimtools.telkom.co.id (UIMTools)
http://10.62.165.36/valins/home.php (Web Valins)
http://10.60.169.61/adminapp/validasi_dropcore/comparasi.php (Komparasi)
https://docs.google.com/spreadsheets/d/1zLpVb2H6a-00kaMfY6XVM01Znnw_8S9iKuBsHI7pewA/edit?usp=sharing (Berlima)
Specification CPE
ALCxxxxx →  G240WL
ZTExxxxx →  generic ONT
xxxxxxxxx →  HG8245A


Dimana xxx = angka


*SN yg formatnya selain diatas gunakan specification generic ONT



