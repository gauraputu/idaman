*last update: 08/12/2021 09:26 AM*    
ada yang salah? ayo ikut bantu tingkatkan, edit di [github](https://github.com/gauraputu/idaman/tree/main/_posts)
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
  
1. trail share, lepas DownlinkPort dari pipe lalu buatkan trail baru

# 1005:Invalid Port_Reservation_ID in request

1. Cari dengan CLI, untuk semua service Copy stp, stp target, trail (jika ada), buatkan trail (jika tidak ada), buat versi baru dengan semua data yg disimpan tadi, jika service port kosong cari di ibooster. Alternatif lebih cepat gunakan dava

# 1006
1. Tanya orderan, bila PSB cancel input ulang (atau bisa search no inet di uim, bila tidak ada berarti order psb, bila ada berarti modif), bila modif, samakan NCLI di uim dengan di Nossa, sesuaikan datek (stp, service port, trail), bila service disconnected

# 1007:Unable to locate service port ODP-XXX-XXX/00
Penyambungan perangkat di UIM terdapat dua jenis. p2p (port to port) dan d2d (device to device). Dalam konteks 1007, sambungan p2p dari odp-olt ada yg terputus. Sambungan ini perlu diperbaiki. Tabel 1 menunjukan sambungan normal p2p odp-olt. 


**Tabel 1.** Connectivity dari ODP hingga OLT
Port-Port|Jenis Pipe
---|---
ODP_Uplink_Port - ODP_Splitter_Outlet|Patch_Cable_Core
ODP_Downlink_Port_Cassette - ODP_Splitter_Inlet|Patch_Cable_Core
ODP_Uplink_Port_Cassette - ODP_Downlink_Port_Cassette|FTTX_Fiber
ODP_Uplink_Port_Cassette - ODC_Panel_Downlink_Port|FTTX_Fiber
ODP_Uplink_Port_Cassette - ODC_Panel_Downlink_Port|FTTX_Fiber
ODC_Panel_Uplink_Port - ODC_Splitter_Outlet|Patch_Cable_Core
ODC_Splitter_Inlet - ODC_Panel_Downlink_Port|Patch_Cable_Core
ODC_Panel_Uplink_Port - FTM_OA_Panel_Downlink_Port|FTTX_Fiber
FTM_OA_Panel_Uplink_Port - FTM_EA_Panel_Downlink_Port|FTTX_Fiber
FTM_EA_Panel_Uplink_Port - GPON OLT|Patch_Cable_Core
    
Bila sambungan sudah tersambung OLT, periksa Downlink ODP yang direserve, apakah ada uplinknya atau tidak. Bila tidak ada periksa apakah benar jumlah port downlink sesuai dengan jumlah port valins, bila tidak revisi order.    
Bila perlu cepat, langsung sambung sambungan terakhir dengan OLT atau revoke order, pindah odp.     

# 1010 Unable to locate S-VLAN or M-VLAN associated to GPON03-D5-SMP-2(172.23.59.40) for IPTV_RFS service created by autodesign

1. Kirim nama GPON beserta IP ke HD logic dan minta SVLAN beserta count-nya, kerjakan seperti FO 1003, RR

# 1011 Unable to create CPE

1. Minta ODP dan port lapangan, masukan STP dan trail baru, rr tiket, done
    * Jika balik tier 3 minta ip slot-port embassy, trace odp yg konek ke ip slot-port embassy, buat kan trail di odp tersebut

# 1013

1. Luruskan service port dengan data ibooster, RR

# 1021

1. Tanya apakah order PSB,modif/hw-2p, kalau PSB cancel input ulang, kalau modif/hw-2p moban ODP lapangan dan portnya, nanti luruskan STP dan trailnya (bila hw-2p, search by ncli dan luruskan service yg ada), lalu RR, bila balik tier 3 luruskan dengan odp inputan

# 1022

1. Pastikan user account pada RFS sudah ada line profile, bila tidak ada buatkan, sesuaikan dengan CFS, buatkan trail baru

# 1024 reservation id is missing
1. Revisi order

# 1024:One of the Mandatory Parameters are missing : CPE_Network_ID

1. Eskalasi ke grup inventory

\#REQ  #UIM    
Order MO    
SC517552294    
SOM : 391053164 GetTechnicalOrderTask    
TOM : 391060136 GetTTTOMResponse    
IN110088251    
1024:One of the Mandatory Parameters are missing : CPE_Network_ID    
Serial Number : ZTEGC6752BFE    
CPE ID : 16    
    
    
moban rekan, terima kasih 🙏🏻    

# 1029:Reservation not found for Broadband CFS with Reservation ID : 19878380772

1. Cancel input ulang

# 1032
  

# 1030:No Physical Port available with Name : 1-0-6-8
1. Service port dan atau stp tidak lurus, luruskan service port. (bila meluruskan stp, buatkan juga trail baru). Bila balik tier 3 klik ID service port, edit vendor port name menyesuaikan dengan nossa. Setelah order complete kembalikan seperti semula (jika kelupaan bisa bahaya)

# 1033

1. Cek apakah trail share dan cpe lurus, bila trail share buatkan baru, bila cpe tidak lurus dan SN tidak ada di ibooster minta ke yg kirim, RR
    * Bila balik tier 3 disconnect service RFS dan CFS sesuai dengan ticket, RR
1. Bila status service pending, lihat OSM service apa yg di add. Buang BI dan cancel-complete service, RR   
    
(lihat juga kebawah, bisa lebih dari 1 service)    
bila tetap balik tier 3, minta cancel input ulang ke inputer

# Error 1035

1. Cek by nomor inet apakah service yg keluar nomor CLInya sama, jika tidak edit semua service yg keluar sesuaikan CLInya.
2. masuk ke bagian ID, hapus nama pelanggan yg lama dan ganti dengan nama pelanggan yg baru (cari di OSM nama pelanggan barunya), klik tombol associate
3. paste CLI ke field ID, bila tidak ditemukan buat baru
4. Jika sudah selesai diganti semua RR

# 1036

1. sesuaikan CPE dengan iBooster

# 1038
1. Copy id internet pelanggan, buka ibooster, simpan network id dan serial number, buka service, masuk rfs periksa apakah specification di cpe sudah sesuai SN ibooster, bila tidak buatkan cpe baru, simpan id inet/voice/iptv (sesuai permintaan), alter cpe, rr tiket, done bila cpe sudah sesuai SN masuk cpe, edit, tambahkan network id, rr tiket, done
    
Jika hanya voice masuk CPE dan isikan network ID berapa saja, RR

# 1043 VPI is missing for Service

1. Masuk RFS, bagian S-Vlan -> Characteristic, isikan VPInya dengan 0 / 8

# 1046 

1. Bila order AO Revisi order
2. Bila order MO tanya update speed dari berapa ke berapa, buka uim tools, masuk service management, service update, masukan nomor inet, lihat di tiket jenis paket yg perlu diubah, update paket service agar berlainan dengan yg di tiket

# 1048 delete feature yg sama dengan yg nossa
Step 1: sama seperti 1049 hanya saya feature didelete, bukan di add

# 1049

1. masuk CFS, create new configuration, add feature dengan isi sesuai NOSSA, approve-issue-complete, RR

# 1053

1. Di nossa scroll ke bagian details, cek apakah trail share pada service yg ada di bagian detail, jika share buatkan baru, RR

# 1054

1. sesuaikan service port dengan nossa, RR

# 1056

1. Isikan STP, STP target dan trail, RR

# 1057
1. isikan Service port, RR
atau bila STP juga kosong
1. gunakan DAVA untuk isi STP, RR

# 1059

1. isikan trail, RR

# 1060

1. Cari CPE dengan SN, bila tidak ada buat baru, data dari iBooster

# 1069 

1. masuk logical device, paste nama gpon, search, edit bagian sip proxy sesuai nossa
Eg. SIP proxy diisi : "10.0.0.10::10.0.0.40"
Step: rr

# 1108 : Service trail :2722197464 has data services as consumers but CPE is not terminated to one of its termination point

1. Isikan CPE

# 1118

1. Masuk CFS create new
2. Assign nomor telephone (nomor didapat dari service yg setelah NCLI, bila tidak bisa diassign minta release ulang)
3. Approve-issue-complete, RR

# 1120 VCI is missing for Service

1. Masuk RFS, bagian S-Vlan -> Characteristic, isikan VCInya dengan 35

# The Inventory item (id=1250818504) has a configuration that is associated to another BI (id=1570023908). The configuration is not in a completed or canceled state. Therefore the action Modify cannot be applied to the Inventory item through the Business Int

1. Buang BI, complete/cancel configuration, rr, done

# Inventory item has an open configuration

1. completekan service configuration, RR


# An error has occurred flushing the user transaction

1. RR,done

# Disconnect of xxxx is not allowed as yyyy configuration is not in Completed or Canceled state

1. Buka service yyyy, complete-kan version terakhir (bila ada BI dibuang), RR tiket

# Regis

1. Search odp, buka port sesuai tele, copy odp downlink port sementara, cek apakah ada koneksi pelanggan, bila ada copy broadband kirim di bank data lalu putus port ODP, Buat cpe sesuai SN tele (network ID kosong, spec selalu generic), copy id, masuk edit copy ulang id taruh di name dan tambakah _ONT, copy dan simpan sementara, copy nomor NO_USE sementara, save and close, masuk ke pipe, ikuti gambar
2. copy ID pipe sementara agar bisa kembali ke pipe summary sebelum masuk ke ke salah satu ID
3. masukan nomor odp downlink yg disimpan tadi
4. Masuk ke ID yg kedua (gunakan id pipe yg disimpan tadi bila tidak ada di recent items), create physical device, masukan nomor CPE
5. Masuk kembali ke physical device, paste nomor cpe ke field ID dan kirim nomor odp downlink, id CPE, nomor no_use di telegram (sesuai notepad)
6. bila regis error di WOC, cek odp dan OLT apakah roles (AN/STP) dan custom involvement (STO) sudah terisi atau belum, bila belum isikan
7. cara add STO pada custom involvement
8. klik involve, pilih custom object
9. ketik nama STO pada field name, search, invovle
10. ubah involvement spec menjadi organisation_mapping, from entity role kosong, to entity role kosong, save and close, selesai

# Invalid resource specification. Resource you are trying to assign should be part of the Inventory Configuration Item Spec Options.

1. Karena trail pada service exisisting tersambung ke OLT yg lain dari sekarang. Solusinya antara sesuaikan sambungan trail service existing ke OLT yg baru atau kembalikan ODP ke OLT yg lama

# CTA Data empty No TechnicalActions on CTA response

1. Masuk cfs, expand properties, klik kanan characteristics, ubah service status menjadi “Suspended” (tanpa tanda petik). RR done

# The Inventory item (id=xxxx) has an open configuration that is not in a completed or canceled state. Therefore the action Modify cannot be applied to the Invent

1. Complete-kan version terakhir pada service id xxxx (bila ada BI dibuang)

# Service ID xxxx already exist

1. Reply revoke fu di grup, done

# Disconnect of 22526704_152431208598_INTERNET is not allowed as 22526704_152431208598_INTERNET - 2 - 2 - Se_40973849_2 configuration is not in Completed or Canceled state. A suggestion would be to try Disconnect after Cancel or Complete the configuration.]

1. Buka service, cancel kedua rfs dan cfs,RR
2. Masuk ke service yg issue, pojok kanan atas disasociate business interaction, current, pojok kanan atas cancel-complete

# Cannot determine which service to use because multiple Services were found (40783585, 926093902,) for the External Object Id 32288101_152435900797_INTERNET.]

1. Disconnect-complete salah satu service (yg tidak ada BI-nya ato yg terlama)


# The Topology mapping process for termination point processing failed.         

1. RR, done

# Business Interaction: 1593187528 was not found

1. RR, done

# An error occurred while creating business interaction ossintegration.

1. RR, Done

# An error occurred while calling process interaction

1. Cek penulisan entity ID, bila tidak bisa diedit entity ID yg salah buatkan service baru

# 240045Invalid Reference. Configuration Item CPE already has a Reference

1. pastikan CPE dan target CPE kosong (bila tidak ada target CPE, tambahkan). Pastikan trail sama. Jika tetap balk tier 3 buatkan trail baru.

# OSM CTA Data empty No TechnicalActions on CTA response (astinet)

1. tanya apa ini MO atau tidak, jika MO minta speed lama, masuk rfs, shared params, ubah bandwidth menjadi speed lama, (jangan di complete), rr-dorong.

# terminationPoint == null

1. pastikan cpe dan STP ada dalam 1 pipe yg sama, jika sudah disamakan RR

# resource == null

1. Putus odp lama, buatkan trail baru

# CTA Data empty No TechnicalActions on CTA response

1. Masuk CFS, klik kanan characteristic, ubah service status menjadi “Suspended”, RR

# Service ID xxxx already exists

1. Cancel input ulang

# ALU_AMS_PORT_NT_FOUN:ServicePort Not Found / ONT Connectivity is Missing.

1. Moban odp dan port lapangan, Luruskan stp-trail

# 240045Invalid Reference. Configuration Item CPE already has a Reference.
1. Dereference CPE dan target pada setiap service, jika balik tier 3, cek apakah stp ada pelanggan lain, putuskan odp

# Failed to invoke end component oracle.communications.inventory.webservice.ws.CTOUimPortImpl (POJO), operation=CalculateTechnicalActions -> Failed to invoke method]

1. RR, done

# Business Interaction: xxxxx was not found

1. RR,done

# 110585Allocation or referencing of an entity 998370113 is not allowed on configuration

1. Trail share, di lepas cpe dan targetnya baik di servicetrail maupun di dropcore lalu RR kembali. Bila yg keluar trail lama, disconnect trail lalu buatkan baru.


# Problem getting specification from the target object

1. RR done

# The resource type PhysicalJumper with Id 843423908 / 843423886 / 843423908-1445793951 / 843423886-1445793524 is not available because the resource is already assigned.

1. Unassign port 843423908-1445793951 dan 843423886-1445793524. 843423908 / 843423886 adalah id physical devicenya.

# 1908:Region value not found for active device GPON01-D5-KML-3(172.27.104.221)

1. assign sto nya di logical device agar data region nya terisi, cara isi sto lihat di bagian regis

# The current service status of In Service is invalid for the selected action.

1. Ubah status service cfs menjadi suspended kemudian status service cfs dan rfs menjadi suspend.

# 270138 Resources cannot be assigned in Live context when Consumer is in Business Interaction context

1. Trail kena BI, carikan port lain dan buatkan trail baru

# Null

1. Cek apakah servicenya ada di UIM (FO karena sudah ada), hapus service di uim lalu cancel input ulang

# Business Interaction Specification:{0} was not found.
1. RR done

# env:Server CTA Data empty No TechnicalActions on CTA response

1. Masuk cfs, expand properties, klik kanan characteristics, ubah service status menjadi “Suspended” (tanpa tanda petik). RR done

# The current service status of Disconnected is invalid for the selected action

1. Create ulang service yg disconnected

# The service configuration start date of 05/24/2021 is invalid. Start date cannot be before its previous configurations start date.

1. Eskalasi ke grup inventory format berikut:
   
#REQ #UIM
    
Service Name : 41140343_152431215442_INTERNET_RFS     
ID : 837033447    
Version: 5   
    
The service configuration start date of 05/24/2021 is invalid. Start date cannot be before its previous configurations start date.    
    
mohon bantuan error start date rekan agar bisa di complete-kan    
    
Terima kasih

# For input string: "1536K"

1. cek dirfs dan cfs di service uim biasanya ada penulisan upload atau download yang tidak sesuai (hanya boleh angka, tanpa huruf) atau service trail nya sharing


# Appendix

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

## Specification CPE
* ALCxxxxx →  G240WL
* ZTExxxxx →  generic ONT
* xxxxxxxxx →  HG8245A
* CPE lain selain format diatas → generic ONT
    
Dimana xxx = angka
# ini judul contoh
sdflkjsdlfjlkstasjdflkj 
