var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26a201f9-0a56-4509-a873-b3325dd38c93","997ba6cc-2fc1-4926-b434-066b77754306","1a3c8a9b-003d-47ef-89a4-768459a2c540","4cfab560-37ce-4ed5-83e4-0cfcf4f3058a","afad77ee-618d-49ab-83b0-bac75d228750","af53626e-03c4-4db9-afc3-8f24c99af09c","c8bf44c1-7ba4-43b2-9162-d4d93ec451de","d64d7a7b-bf09-477d-8abd-0fa54fdaf698","6c549d40-c765-4554-9d58-2144a2bfab5b","35200dd9-0750-4f50-97d1-0cc0e6a5a00f","4784854a-9e75-4bae-a81a-ef4c0111041b","2c4e5588-e41d-4a20-9fa2-edc67ff4d473","0ef1dd3c-521e-4b2e-b3b1-9a70d530d94d","d06aad2d-b93d-461e-b27d-d6667b4d0fba","d4349a7b-17aa-42bb-a05d-d4db88c4cd84","2e4ff0af-4bf8-43cb-8bab-4a3db9d4ec2a","7b5b4293-82a8-4d10-986f-f113c0aa2974","a1a65122-4f3b-4657-bf40-a2f26b5baf2b","09969e5d-5e2b-4e38-b3ca-fdae3308d8d8","c6cca1cf-a81a-4ee3-b1c1-23bed7fb4c96","40d708d7-eb8f-41d4-a40a-96f4888a21a6","74891de1-1da5-4c26-bb18-c84748520810","a15f9bec-a331-4e1b-b137-53d76e874149","2ba90ff4-574a-4686-adac-07b17b554d7d","065688fc-8516-42ae-9da4-f4836b713e05","a969d4b5-00a0-44e0-bd81-af075474f431","f5dab05f-12df-4b8c-8e50-fc350b314e60","eb4c2be7-c17e-41e0-a590-15c33e6f17d6","ed53e197-12ab-4550-9777-8976f4eb66d1","1aaf07a1-d5d5-4211-8947-2f0f63eee20e","800b6350-343e-44e6-a439-5e993a424dac","9fbb974b-b6ad-49e6-a4ef-3113fe539776","2c3273ee-2c0b-4e0c-8576-88e2407ba436","abbb9ab1-c25a-4efe-b189-9ac58083cfdd","3fa54007-d958-4179-812c-e199844bf0bc","5a921db3-f236-45de-8a00-18ddadc2410a","c5f14b2b-9001-4c8c-83e2-39868b7568ce","a7d6195d-520a-4e9f-8538-3e207d5a4d91","bc34d59a-06a5-4de8-b4a7-392d2e3215df","510369f2-7027-40b8-9cd3-fc3630d796ff","18116c9a-ad14-4922-bd32-2032035f8472","a1edf114-91eb-4d27-8a06-1c15c06cffbd","ab1096ee-2b98-4372-8f50-7d5c3eb3cc00","76db61f0-7044-4708-9913-65f1b9a9ec99","5d88aa47-d720-4f05-ae11-17dcdd04acf3","37a1865c-c8e3-4be1-95ed-abb73661c13e","1fd811b1-a361-430e-b135-9b5c883aa1b9","c124af0b-0b14-4bc9-bc3e-d3e0fb423a3a","8f9608c9-4d32-49d2-adbc-e6322f8f6b19","392cb343-4bbf-463e-8b2a-e38c8824527e","e81976a0-d3b5-47de-a52f-75fae8dfc401","b4329c9a-d5ec-4354-8acf-522ea56439a9","593a9e01-91ea-46ac-bfe8-0bbe9d47421b","fede3d31-3f8b-4bf0-89dd-c71becc4f9f0","9fc1ea55-cd91-4ef5-9ddc-cf8fe69c14dc","9da50be7-edf4-470b-8cdd-11565cf9939d","e043708b-a708-4fed-a0a7-55c458db5a9c","ab6ff569-4515-4913-a1ab-958e9501e329","ba463d3b-1a37-4544-be62-1137c4ce8441","9cff0eab-042c-4634-9257-275ebd468617","cd04543c-1d2f-4a76-96ce-2ea0ed52cdc4","38245e45-f802-4221-bc6f-cd883dc2e116","96a7a170-a434-417d-9f14-7885b704dfaf","ecf52901-2dda-49df-bf18-79dabd02a675","c646d95d-2ac4-48d0-817e-b4de395588aa","c8ed9e5b-ac48-4d71-a6c9-4b1fb54c8d44","32f5382a-0baa-42c4-b1ad-0a9270c88ef6","a51758b2-da20-472f-a805-455bf0694c7c","aaba88dc-e81a-4af4-a175-b7f08026e443","b76416d7-8585-4043-afc6-0b4561b756e4","a764f90d-4e9b-4f65-ac15-9b20be056a78","246e8112-c441-40a4-81ae-84a4704fceca","35a6e5f8-f0ba-41e9-9e22-0d2697c9ce8a","4dd867dd-0aef-4edb-91cf-8e7c2bf47941","c16a5152-b07a-464a-8db9-19d542e29547","4a357a96-2e99-4390-bbab-3736f972e88b","9ada0351-b435-44b9-a453-d80ca0830acc","1fc017f7-e042-4df0-b6f9-573b697e4a41","36b9f864-45e7-4eea-a244-0c4908e04fef","92656e58-48bf-476c-b0c2-253fef5d7b09","6f5baeef-08a0-4165-a1c1-2bcc51b14e0a","458f39d6-5622-488b-895f-810b2c6d1c6b","f4c139cc-650a-4d18-867b-c8339b9f3d1e","9f66c329-a286-435f-8c57-731b44369c5b","0df5a803-687e-45ab-9454-f631ec05a8d6"],"propsByKey":{"26a201f9-0a56-4509-a873-b3325dd38c93":{"name":"red soul","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":".uitm5euiWw.fFX5U3WkTCjt6x37N2Gw","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/26a201f9-0a56-4509-a873-b3325dd38c93.png"},"997ba6cc-2fc1-4926-b434-066b77754306":{"name":"red soul small","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"FWd.3v2TLu7JVWLUaf691iJbj7mK5xtb","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/997ba6cc-2fc1-4926-b434-066b77754306.png"},"1a3c8a9b-003d-47ef-89a4-768459a2c540":{"name":"red soul iframe","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"8FDjFOJ8HgOCdFXr.BOVk6RuTZewCr40","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/1a3c8a9b-003d-47ef-89a4-768459a2c540.png"},"4cfab560-37ce-4ed5-83e4-0cfcf4f3058a":{"name":"red soul split","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":10,"version":"OuR_PCyJsBtUE5yQogsWE_9ZxAQWyXFW","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/4cfab560-37ce-4ed5-83e4-0cfcf4f3058a.png"},"afad77ee-618d-49ab-83b0-bac75d228750":{"name":"red soul shatter","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":5,"looping":false,"frameDelay":5,"version":"NZNHv5FC5nxo4GEQ2XwATn0iHNcGLniv","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":45},"rootRelativePath":"assets/afad77ee-618d-49ab-83b0-bac75d228750.png"},"af53626e-03c4-4db9-afc3-8f24c99af09c":{"name":"blue soul","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"Du3mS5wAC3xo2J_gag.Q6OGjVNixf1py","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/af53626e-03c4-4db9-afc3-8f24c99af09c.png"},"c8bf44c1-7ba4-43b2-9162-d4d93ec451de":{"name":"blue soul iframe","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"w9wcKUh8zzn9oyjEsjAYfNgvJknu_Jp8","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/c8bf44c1-7ba4-43b2-9162-d4d93ec451de.png"},"d64d7a7b-bf09-477d-8abd-0fa54fdaf698":{"name":"monster soul","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"u7mKuplOCabaJsvWnifFMAe9RpXRcgGR","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/d64d7a7b-bf09-477d-8abd-0fa54fdaf698.png"},"6c549d40-c765-4554-9d58-2144a2bfab5b":{"name":"monster soul iframe","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"RPOxK9A48egJJwuFBlSY7gm5JEFR01Va","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/6c549d40-c765-4554-9d58-2144a2bfab5b.png"},"35200dd9-0750-4f50-97d1-0cc0e6a5a00f":{"name":"blue monster soul","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"dXg4d93LIEr9ujp.eRDd.P7Phh1N3hyf","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/35200dd9-0750-4f50-97d1-0cc0e6a5a00f.png"},"4784854a-9e75-4bae-a81a-ef4c0111041b":{"name":"blue monster soul iframe","sourceUrl":null,"frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"J0fJ6zkPnvfRgR6uMgg8pssmk1LxAW4Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/4784854a-9e75-4bae-a81a-ef4c0111041b.png"},"2c4e5588-e41d-4a20-9fa2-edc67ff4d473":{"name":"sideways bar","sourceUrl":null,"frameSize":{"x":360,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"xvtKreBKSBOFBC6VfcvraCocp10eaNBR","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":3},"rootRelativePath":"assets/2c4e5588-e41d-4a20-9fa2-edc67ff4d473.png"},"0ef1dd3c-521e-4b2e-b3b1-9a70d530d94d":{"name":"up down bar","sourceUrl":null,"frameSize":{"x":3,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"jJoro7.MqHduAE4Es8tIqbqKxEzPAWzJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":3,"y":80},"rootRelativePath":"assets/0ef1dd3c-521e-4b2e-b3b1-9a70d530d94d.png"},"d06aad2d-b93d-461e-b27d-d6667b4d0fba":{"name":"short sideways bar","sourceUrl":null,"frameSize":{"x":80,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"M4i9ZGefjYifVYDEaNW.jwz3VxPVUst2","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":3},"rootRelativePath":"assets/d06aad2d-b93d-461e-b27d-d6667b4d0fba.png"},"d4349a7b-17aa-42bb-a05d-d4db88c4cd84":{"name":"up down split","sourceUrl":null,"frameSize":{"x":9,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"PZZYu7aOF4O717zZxMSaG87xOupvV1ST","loadedFromSource":true,"saved":true,"sourceSize":{"x":9,"y":82},"rootRelativePath":"assets/d4349a7b-17aa-42bb-a05d-d4db88c4cd84.png"},"2e4ff0af-4bf8-43cb-8bab-4a3db9d4ec2a":{"name":"up down split warn","sourceUrl":null,"frameSize":{"x":9,"y":80},"frameCount":2,"looping":true,"frameDelay":5,"version":"FXTKUsIhNo6Fat.j5ZxIoesesZBg694p","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":80},"rootRelativePath":"assets/2e4ff0af-4bf8-43cb-8bab-4a3db9d4ec2a.png"},"7b5b4293-82a8-4d10-986f-f113c0aa2974":{"name":"up down split kill","sourceUrl":null,"frameSize":{"x":3,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"JCHRgHnQwoRXIKfhCIPKtlCJ0N4smqoJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":3,"y":80},"rootRelativePath":"assets/7b5b4293-82a8-4d10-986f-f113c0aa2974.png"},"a1a65122-4f3b-4657-bf40-a2f26b5baf2b":{"name":"FIGHT","sourceUrl":null,"frameSize":{"x":176,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"vW1kpBpiIsD5OxQLnr2fw..eNlRvC5iw","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":67},"rootRelativePath":"assets/a1a65122-4f3b-4657-bf40-a2f26b5baf2b.png"},"09969e5d-5e2b-4e38-b3ca-fdae3308d8d8":{"name":"FIGHT selected","sourceUrl":null,"frameSize":{"x":176,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"SmfW8YF4hhCBujtX1Ob23_9pAf6OfNBj","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":67},"rootRelativePath":"assets/09969e5d-5e2b-4e38-b3ca-fdae3308d8d8.png"},"c6cca1cf-a81a-4ee3-b1c1-23bed7fb4c96":{"name":"ITEM","sourceUrl":null,"frameSize":{"x":176,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"fcUO.sRoIAVTHB.wsXZvJiisA.VHMHiY","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":67},"rootRelativePath":"assets/c6cca1cf-a81a-4ee3-b1c1-23bed7fb4c96.png"},"40d708d7-eb8f-41d4-a40a-96f4888a21a6":{"name":"ITEM selected","sourceUrl":null,"frameSize":{"x":176,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"C3iG3WY_g.TinmS7DcDSV8FuqrjV0MRF","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":67},"rootRelativePath":"assets/40d708d7-eb8f-41d4-a40a-96f4888a21a6.png"},"74891de1-1da5-4c26-bb18-c84748520810":{"name":"MERCY","sourceUrl":null,"frameSize":{"x":177,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ccg1EWFIbkmkXVWGpl.jfezPWSfwJoNY","loadedFromSource":true,"saved":true,"sourceSize":{"x":177,"y":67},"rootRelativePath":"assets/74891de1-1da5-4c26-bb18-c84748520810.png"},"a15f9bec-a331-4e1b-b137-53d76e874149":{"name":"MERCY selected","sourceUrl":null,"frameSize":{"x":177,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"VpfGsL__U8iWMDFE3NWopf9yyMMXrgqC","loadedFromSource":true,"saved":true,"sourceSize":{"x":177,"y":67},"rootRelativePath":"assets/a15f9bec-a331-4e1b-b137-53d76e874149.png"},"2ba90ff4-574a-4686-adac-07b17b554d7d":{"name":"ACT","sourceUrl":null,"frameSize":{"x":176,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"M4vyy_O9Vb_xFlwRGM3rHTAvaD8qSt3I","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":69},"rootRelativePath":"assets/2ba90ff4-574a-4686-adac-07b17b554d7d.png"},"065688fc-8516-42ae-9da4-f4836b713e05":{"name":"ACT selected","sourceUrl":null,"frameSize":{"x":176,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"UgNUX4AiyFd2q1NrPAkK_LEZXvblcoqI","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":69},"rootRelativePath":"assets/065688fc-8516-42ae-9da4-f4836b713e05.png"},"a969d4b5-00a0-44e0-bd81-af075474f431":{"name":"Scott safe","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"g_cG4RyEVtKD7PavN36O8MtozX5ifxQs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a969d4b5-00a0-44e0-bd81-af075474f431.png"},"f5dab05f-12df-4b8c-8e50-fc350b314e60":{"name":"Scott shadow","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"psBpQGrLYPVMQJz1uddkKCnqS0JL71Od","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/f5dab05f-12df-4b8c-8e50-fc350b314e60.png"},"eb4c2be7-c17e-41e0-a590-15c33e6f17d6":{"name":"Scott shadow orange","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"pviCTmpcs1X04WAKza10thtiXca6Y11x","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/eb4c2be7-c17e-41e0-a590-15c33e6f17d6.png"},"ed53e197-12ab-4550-9777-8976f4eb66d1":{"name":"Scott shadow blue","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"zP7yN.htoxPZsXTuq81h2oQ7h75LBetm","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/ed53e197-12ab-4550-9777-8976f4eb66d1.png"},"1aaf07a1-d5d5-4211-8947-2f0f63eee20e":{"name":"Scott spooked","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"fd8nSx4s_Ke51TXtPE3BiZaPtfmw8Bwz","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/1aaf07a1-d5d5-4211-8947-2f0f63eee20e.png"},"800b6350-343e-44e6-a439-5e993a424dac":{"name":"Scott dust","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":10,"looping":false,"frameDelay":4,"version":"2Vb5Eb2w2lCedQ9sT0owbmylwgXMRw3K","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/800b6350-343e-44e6-a439-5e993a424dac.png"},"9fbb974b-b6ad-49e6-a4ef-3113fe539776":{"name":"Scott sweat","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"rpXx5wnkVdPx__NP_CYRU2aqeOzXok0r","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/9fbb974b-b6ad-49e6-a4ef-3113fe539776.png"},"2c3273ee-2c0b-4e0c-8576-88e2407ba436":{"name":"Scott sweat blink","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"7CMhs.xcVEke_BmniTWQ9pV0XLeWOA0F","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/2c3273ee-2c0b-4e0c-8576-88e2407ba436.png"},"abbb9ab1-c25a-4efe-b189-9ac58083cfdd":{"name":"Scott blink","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"xIfyOqwj1n2c6evspytEUttCGz9F9xtd","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/abbb9ab1-c25a-4efe-b189-9ac58083cfdd.png"},"3fa54007-d958-4179-812c-e199844bf0bc":{"name":"Scott shrug","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"E_v4b466qVyDcxekp4wrE06DJmk.FmOI","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/3fa54007-d958-4179-812c-e199844bf0bc.png"},"5a921db3-f236-45de-8a00-18ddadc2410a":{"name":"Scott shrug blink","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"H1fs8ZnxJlSPVNUxnQGy0kl540GnEcD0","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/5a921db3-f236-45de-8a00-18ddadc2410a.png"},"c5f14b2b-9001-4c8c-83e2-39868b7568ce":{"name":"Scott sus","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ra5t4DPq8iZOkzDXwKrqiTPNfynwKlNI","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/c5f14b2b-9001-4c8c-83e2-39868b7568ce.png"},"a7d6195d-520a-4e9f-8538-3e207d5a4d91":{"name":"Scott angry","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"sYQNR9F.5RzdKckpyZJy5VHf0IG.dBiC","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/a7d6195d-520a-4e9f-8538-3e207d5a4d91.png"},"bc34d59a-06a5-4de8-b4a7-392d2e3215df":{"name":"Scott idle better","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":8,"looping":true,"frameDelay":12,"version":"BMGUdlyPfN7t2OkzvmBhfG5zhuLYtQeu","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/bc34d59a-06a5-4de8-b4a7-392d2e3215df.png"},"510369f2-7027-40b8-9cd3-fc3630d796ff":{"name":"Scott idle","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":8,"looping":true,"frameDelay":12,"version":"C6jt9G.wpGWi_UU_PX2HRUEtmoScRaZK","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/510369f2-7027-40b8-9cd3-fc3630d796ff.png"},"18116c9a-ad14-4922-bd32-2032035f8472":{"name":"textbox","sourceUrl":null,"frameSize":{"x":178,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZdG6VGr.x_inc7WsR2Nr4O5X_3a4JewM","loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":100},"rootRelativePath":"assets/18116c9a-ad14-4922-bd32-2032035f8472.png"},"a1edf114-91eb-4d27-8a06-1c15c06cffbd":{"name":"top blaster","sourceUrl":null,"frameSize":{"x":42,"y":44},"frameCount":1,"looping":false,"frameDelay":12,"version":"kR5oe7eR5cm5b5XRS78g3AMkPMDNkuJz","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":44},"rootRelativePath":"assets/a1edf114-91eb-4d27-8a06-1c15c06cffbd.png"},"ab1096ee-2b98-4372-8f50-7d5c3eb3cc00":{"name":"boom!","sourceUrl":null,"frameSize":{"x":950,"y":34},"frameCount":8,"looping":true,"frameDelay":3,"version":"SU_z3gdXPW5TxV5AqFC6m7eZgFcll0D6","loadedFromSource":true,"saved":true,"sourceSize":{"x":950,"y":272},"rootRelativePath":"assets/ab1096ee-2b98-4372-8f50-7d5c3eb3cc00.png"},"76db61f0-7044-4708-9913-65f1b9a9ec99":{"name":"magic sparkle","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":10,"looping":false,"frameDelay":4,"version":"D6f4bXfmHmUD20g5EJH5u7Vro4Lwehf3","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":128},"rootRelativePath":"assets/76db61f0-7044-4708-9913-65f1b9a9ec99.png"},"5d88aa47-d720-4f05-ae11-17dcdd04acf3":{"name":"sparkle warn","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":2,"looping":true,"frameDelay":5,"version":"..p8b35o_FDLmDF6gzm3Hlpu06TkXigQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":64},"rootRelativePath":"assets/5d88aa47-d720-4f05-ae11-17dcdd04acf3.png"},"37a1865c-c8e3-4be1-95ed-abb73661c13e":{"name":"platform","sourceUrl":null,"frameSize":{"x":68,"y":12},"frameCount":1,"looping":false,"frameDelay":12,"version":"OGoQXnIadYlWDzB3C33kGvk1TFYD82g8","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":12},"rootRelativePath":"assets/37a1865c-c8e3-4be1-95ed-abb73661c13e.png"},"1fd811b1-a361-430e-b135-9b5c883aa1b9":{"name":"platform no drag","sourceUrl":null,"frameSize":{"x":68,"y":12},"frameCount":1,"looping":false,"frameDelay":12,"version":"zpbVxFMiwILLBaSGYrX6rMEthy3Jz5PA","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":12},"rootRelativePath":"assets/1fd811b1-a361-430e-b135-9b5c883aa1b9.png"},"c124af0b-0b14-4bc9-bc3e-d3e0fb423a3a":{"name":"Ace Diamond","sourceUrl":null,"frameSize":{"x":140,"y":190},"frameCount":1,"looping":true,"frameDelay":12,"version":"v7U4pmFZdFtbWdzi_PXXUxCgqfCsF2ut","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":190},"rootRelativePath":"assets/c124af0b-0b14-4bc9-bc3e-d3e0fb423a3a.png"},"8f9608c9-4d32-49d2-adbc-e6322f8f6b19":{"name":"wand","sourceUrl":null,"frameSize":{"x":7,"y":40},"frameCount":1,"looping":false,"frameDelay":12,"version":"k3M8AqTWAoUgNVuHKVQvhnoPrra9qiz.","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":40},"rootRelativePath":"assets/8f9608c9-4d32-49d2-adbc-e6322f8f6b19.png"},"392cb343-4bbf-463e-8b2a-e38c8824527e":{"name":"spiked wand","sourceUrl":null,"frameSize":{"x":40,"y":7},"frameCount":1,"looping":false,"frameDelay":12,"version":"JFkpALKu67EmoN7ofSlVxj6vdmVjOrHJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":7},"rootRelativePath":"assets/392cb343-4bbf-463e-8b2a-e38c8824527e.png"},"e81976a0-d3b5-47de-a52f-75fae8dfc401":{"name":"short wand","sourceUrl":null,"frameSize":{"x":7,"y":20},"frameCount":1,"looping":false,"frameDelay":12,"version":"VQjEQf4gMyBi2fs5DnZST395bfum3ix0","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":20},"rootRelativePath":"assets/e81976a0-d3b5-47de-a52f-75fae8dfc401.png"},"b4329c9a-d5ec-4354-8acf-522ea56439a9":{"name":"long wand","sourceUrl":null,"frameSize":{"x":7,"y":60},"frameCount":1,"looping":false,"frameDelay":12,"version":"NQN9MfctX1pR4XsvgN5U.h2hBKUBF1tb","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":60},"rootRelativePath":"assets/b4329c9a-d5ec-4354-8acf-522ea56439a9.png"},"593a9e01-91ea-46ac-bfe8-0bbe9d47421b":{"name":"spiked floor","sourceUrl":null,"frameSize":{"x":351,"y":20},"frameCount":1,"looping":false,"frameDelay":12,"version":"NM.ADwCWA2TFIt1m_eWMqr_GBTR0_XAe","loadedFromSource":true,"saved":true,"sourceSize":{"x":351,"y":20},"rootRelativePath":"assets/593a9e01-91ea-46ac-bfe8-0bbe9d47421b.png"},"fede3d31-3f8b-4bf0-89dd-c71becc4f9f0":{"name":"spiked wall","sourceUrl":null,"frameSize":{"x":20,"y":79},"frameCount":1,"looping":false,"frameDelay":12,"version":"70aJVOnW5ANHwnutmSIiTHCA4nu3SrWj","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":79},"rootRelativePath":"assets/fede3d31-3f8b-4bf0-89dd-c71becc4f9f0.png"},"9fc1ea55-cd91-4ef5-9ddc-cf8fe69c14dc":{"name":"death wands","sourceUrl":null,"frameSize":{"x":351,"y":80},"frameCount":1,"looping":false,"frameDelay":12,"version":"tRb_XsS02SVCfCte5uCoe.gQLm3ps8nO","loadedFromSource":true,"saved":true,"sourceSize":{"x":351,"y":80},"rootRelativePath":"assets/9fc1ea55-cd91-4ef5-9ddc-cf8fe69c14dc.png"},"9da50be7-edf4-470b-8cdd-11565cf9939d":{"name":"MISSINGANIM","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"pnEdrL1JCMwUGyZzJNmeaUGNgH7jBQpK","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9da50be7-edf4-470b-8cdd-11565cf9939d.png"},"e043708b-a708-4fed-a0a7-55c458db5a9c":{"name":"abyss characters","sourceUrl":null,"frameSize":{"x":350,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"mer6OWw3aFfFtFOVPWZb2k0ma.zw5GnO","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":160},"rootRelativePath":"assets/e043708b-a708-4fed-a0a7-55c458db5a9c.png"},"ab6ff569-4515-4913-a1ab-958e9501e329":{"name":"plusquil","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"XQz4R5LlHRlPQUirwgnpRhymFfIT3HDR","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/ab6ff569-4515-4913-a1ab-958e9501e329.png"},"ba463d3b-1a37-4544-be62-1137c4ce8441":{"name":"plusquil fren","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"iUz5ddkML79Mmw3aO2kj3h9PAjzqfPwz","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/ba463d3b-1a37-4544-be62-1137c4ce8441.png"},"9cff0eab-042c-4634-9257-275ebd468617":{"name":"plusquil sus","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"uTH4h27LCsGmKTdwg8ANI7alHqIHbzpi","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/9cff0eab-042c-4634-9257-275ebd468617.png"},"cd04543c-1d2f-4a76-96ce-2ea0ed52cdc4":{"name":"plusquil evil","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":5,"looping":false,"frameDelay":5,"version":"el8b6lsPJrh91WtB51G6lRahlgWwS.sK","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":900},"rootRelativePath":"assets/cd04543c-1d2f-4a76-96ce-2ea0ed52cdc4.png"},"38245e45-f802-4221-bc6f-cd883dc2e116":{"name":"plusqiul knife","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"eN3JRcnkQm7asG1LXoaQ.i5ZoDsv4IKr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/38245e45-f802-4221-bc6f-cd883dc2e116.png"},"96a7a170-a434-417d-9f14-7885b704dfaf":{"name":"plusquil squish","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"HOrwwX5s3sh4Ft9SZjIiZ3oXq.ytDcc0","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/96a7a170-a434-417d-9f14-7885b704dfaf.png"},"ecf52901-2dda-49df-bf18-79dabd02a675":{"name":"darby ded","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"WTlkDhHDE3ZOg9Qemt1YyS2c6.ZdXkj.","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ecf52901-2dda-49df-bf18-79dabd02a675.png"},"c646d95d-2ac4-48d0-817e-b4de395588aa":{"name":"jester angry","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"hBo_lQ7sKPgiKyK8ntBW2MN7BjUgVNy8","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c646d95d-2ac4-48d0-817e-b4de395588aa.png"},"c8ed9e5b-ac48-4d71-a6c9-4b1fb54c8d44":{"name":"plusquil barrier","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"VpDx7fQKBM2uc35FIabcmZxVfgp9ILDH","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c8ed9e5b-ac48-4d71-a6c9-4b1fb54c8d44.png"},"32f5382a-0baa-42c4-b1ad-0a9270c88ef6":{"name":"dust hand","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"FFT1KkjriCrWd.oIbFQTnyQSvQF5W.3o","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/32f5382a-0baa-42c4-b1ad-0a9270c88ef6.png"},"a51758b2-da20-472f-a805-455bf0694c7c":{"name":"plusquil suprise","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":15,"looping":false,"frameDelay":4,"version":"X44KS23Extdr9oqcACZ6mget5uJR.qvC","loadedFromSource":true,"saved":true,"sourceSize":{"x":1600,"y":1600},"rootRelativePath":"assets/a51758b2-da20-472f-a805-455bf0694c7c.png"},"aaba88dc-e81a-4af4-a175-b7f08026e443":{"name":"sus smile","sourceUrl":null,"frameSize":{"x":350,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"P6irpyCi3fXpZaiUQ9tD_Ja9C7XdMvH4","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":350},"rootRelativePath":"assets/aaba88dc-e81a-4af4-a175-b7f08026e443.png"},"b76416d7-8585-4043-afc6-0b4561b756e4":{"name":"sussier smile","sourceUrl":null,"frameSize":{"x":350,"y":350},"frameCount":6,"looping":false,"frameDelay":2,"version":"ttUIEpQuJ1eSB6yG_d6htMBZydWL9Djl","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":1050},"rootRelativePath":"assets/b76416d7-8585-4043-afc6-0b4561b756e4.png"},"a764f90d-4e9b-4f65-ac15-9b20be056a78":{"name":"void player walk up loop","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"b_HNLjZQGL12e1t2W9tEkENIt6soeWXo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/a764f90d-4e9b-4f65-ac15-9b20be056a78.png"},"246e8112-c441-40a4-81ae-84a4704fceca":{"name":"void player walk up","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":false,"frameDelay":12,"version":"ga86aetXvCUel6HWPgSOSFI29brQOzqI","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/246e8112-c441-40a4-81ae-84a4704fceca.png"},"35a6e5f8-f0ba-41e9-9e22-0d2697c9ce8a":{"name":"void mellow front","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7Zr6ts7vj1pIEsg4mw6j6g3Nw9u.ElEv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/35a6e5f8-f0ba-41e9-9e22-0d2697c9ce8a.png"},"4dd867dd-0aef-4edb-91cf-8e7c2bf47941":{"name":"void mellow back","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sotZcLLYDFF2aBAtcyb6jhx37F.fNke1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4dd867dd-0aef-4edb-91cf-8e7c2bf47941.png"},"c16a5152-b07a-464a-8db9-19d542e29547":{"name":"void mellow right","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wl0GIOWYQ_ldcGtd5jhxSFR98uTW1.ol","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c16a5152-b07a-464a-8db9-19d542e29547.png"},"4a357a96-2e99-4390-bbab-3736f972e88b":{"name":"textbox2","sourceUrl":null,"frameSize":{"x":360,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"TnYvJAKFPvB7Yjr2_BNTRZIJ6idp8SMn","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":80},"rootRelativePath":"assets/4a357a96-2e99-4390-bbab-3736f972e88b.png"},"9ada0351-b435-44b9-a453-d80ca0830acc":{"name":"notice","sourceUrl":null,"frameSize":{"x":34,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"FhEErFMwy24UzsoG4l6XV9_oM9WgLZyf","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":40},"rootRelativePath":"assets/9ada0351-b435-44b9-a453-d80ca0830acc.png"},"1fc017f7-e042-4df0-b6f9-573b697e4a41":{"name":"mellow portrait normal","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"4CQYOy6fYBGUBUaCziq48BTKCjsOccta","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/1fc017f7-e042-4df0-b6f9-573b697e4a41.png"},"36b9f864-45e7-4eea-a244-0c4908e04fef":{"name":"mellow portrait spooked","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"k5vgFT0TGVs4vPmHeacuTEeFL5qhIoGN","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/36b9f864-45e7-4eea-a244-0c4908e04fef.png"},"92656e58-48bf-476c-b0c2-253fef5d7b09":{"name":"mellow portrait shifty smile","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"6ikFhHHkbzp5oNdVWUaOqzclQFSdhT.k","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/92656e58-48bf-476c-b0c2-253fef5d7b09.png"},"6f5baeef-08a0-4165-a1c1-2bcc51b14e0a":{"name":"mellow portrait sad","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZY5vFyYQFDXLlYediST_ooRb4ce2VNyz","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/6f5baeef-08a0-4165-a1c1-2bcc51b14e0a.png"},"458f39d6-5622-488b-895f-810b2c6d1c6b":{"name":"mellow portrait sadder","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"CawFojfDas0yVAb_S9MbVsv9HuWGw7Vt","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/458f39d6-5622-488b-895f-810b2c6d1c6b.png"},"f4c139cc-650a-4d18-867b-c8339b9f3d1e":{"name":"mellow portrait look down","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"XlaOMeX8ndlIGlNDUEcjj3nOHJ.0xDC7","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/f4c139cc-650a-4d18-867b-c8339b9f3d1e.png"},"9f66c329-a286-435f-8c57-731b44369c5b":{"name":"mellow portrait sweat","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"FJ0tpLtW8OZopeBUah6XOhdNpde2lOk4","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/9f66c329-a286-435f-8c57-731b44369c5b.png"},"0df5a803-687e-45ab-9454-f631ec05a8d6":{"name":"void player face","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"pn1s_AeSAhrt8y4Xo3x6fbEdoGjx8hY_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0df5a803-687e-45ab-9454-f631ec05a8d6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*
@Authors: @Varrience @Mellow
DISCLAIMER, MOST OF THIS IS NOT MY WORK, I WAS ASKED BY @MELLOW IF MERGING PROJECTS IS POSSIBLE, WHICH IT IS
BUT IT REQUIRES A LOT OF WORK YOU MAY REMIX IF YOU DESIRE A COPY BUT ONLY REPUBLISH IF
  1.) GAME HAS BEEN OPTIMISED / IMPROVED APON
    - @see item code
  2.) REFACTORED ASSET WORK BEFITTING A DIFFERENT ROLE THAN THIS ONE
  3.) IMPROVES GAME RECURSIVENESS A.K.A (MAKING IT READABLE / FOLLOWANLE)
@Sources
[TRAILER ]: https://studio.code.org/projects/gamelab/tKtmDaVkHORt0peAVWzBuVvBqViaPClTjYlz6_VjA4o
[VS SCOTT]: https://studio.code.org/projects/gamelab/1Nb1yVMFw0trufhJBYhXPIw3A0qQfkNdQ5onVmrptCo
[EPILOUGE]: https://studio.code.org/projects/gamelab/08FHp19sVtOF6cnN242RoBxXkt-wPkBDS-Fo-1W3T6g
[TRILOGY ]: https://studio.code.org/projects/gamelab/P_exOkM4kAtJ7giCa2wA2uq4rLoNk75TaXhOY7KQvNY

AS FOR THE CURRENT REGUARD OF PUBLIC PROJECTS,
MOST OF THEM LOST THEIR CHARM TO ME, IT'S BECOME DULL
I'D RATHER LIKE TO SEE ACTUAL STUFF PEOPLE MADE....
IF YOU WANT A CHATTING APP THERE ARE PLENTY OTHERS
ONLINE THAT PROVIDE A MUCH BETTER SERVICE ALONG WITH
MUCH MORE FEATURES, IF YOUR GOING TO REMIX A CHAT AT THIS POINT
YOU MIGHT AS WELL UNDERSTAND HOW IT WORKS...
IF YOUR NOT HERE TO CODE... THEN WHY ARE YOU HERE?
(NO OFFENCE) IT'S JUST GENUINE CURIOSITY AT THIS POINT...
AND IF YOU DO PLAN ON RESPONDING, DON'T GIVE AN EXCUSE LIKE
"TO KILL MY BOREDOM", BECAUSE YOUR BORED HERE TOO
DON'T LIE, I POP IN ON CHATS FROM TIME TO TIME, AND NOTHING REALLY CHANGES
SAYING YOUR BORED ACCOMPLISHES NOTHING OTHER THAN COMING OFF DRY AF
NOT TO MENTION THAT ONLY 1-2 CHATS ARE ACTIVE AT ANY GIVEN TIME
LITERALLY DROWNING PEOPLES GOOD WORKS... CDO HAS AN API FOR GOING THROUGH IT
BUT WHY SHOULD I HAVE TO RESORT TO THAT? NOT EVERYONE NEEDS TO BE (OWNER) || (ADMIN)
IS IT LIKE SOME SORT OF POWER TRIP TO YOU? I GUARENTEE YOU IT'S NOT
HOWEVER, I WILL ACKNOWLEGE THE FEW WHO HAVE BRANCHED OFF FOR CUSTOM CODE THAT ISN'T [REMIX]
BUT WOULDN'T YOUR TIME BE BETTER SPENT WORKING ON SOMETHING THAT CAN BE ENJOYED BEYOND
JUST RELYING ON A COMMUNITY FOR IT TO BE "COOL" OR "ENJOYABLE"
IT'S FINE THAT YOU HAVE FRIENDS HERE... IDRK ABOUT THAT ASPECT, BUT THERE
ARE OTHER WAYS OF CONTACTING EACH OTHER BESIDES SPAMMING THE PUBLIC PROJECT SECTION!
TAKE MY ADVICE, 
YOU WILL ALWAYS CARE MORE ABOUT SOMETHING YOU MAKE
RATHER THAN IT BEING GIVEN OR TAKING IT
NOBODY'S PERFERCT FROM DAY 1, BUT AT LEAST TRY!

^^ Ignore it if you don't care... just me venting if you find this somehow, greetings
(also improved the name selection along with the patching the specialized names)

THE FOLLOWING CODE IS SO TERRIBLE THAT
IT MAY BE DISTURBING ACTUAL PROGRAMMERS
      YOUR DISCRETION IS ADVISED
*/
var timer = 0;
var loading = true;
var isTrailer = true;
var isEpilouge = false;
playSound("assets/trailer-vs-kris.mp3", false, function () {
  loading = false;
});
showMobileControls(false, false, false, false);
var bg = "black";
// trailer setup
var story = createSprite(200, 135);
story.setAnimation("abyss characters");
story.visible = false;
// epilouge setup
var dants = 1; //yes, I programmed in the Frisk Dance ;)
var scene = 0;
var scenetime = 0;
var epilouge = createGroup();
var player = createSprite(200, 200);
var mellow = createSprite(200, -1000);
var noticebubble = createSprite(2000, 200);
var old = Date.now();
var now = old;
var delta = 0;
function calculate(framerate) {
  now = Date.now();
  delta = (framerate || 30) / (1000 / (now - old));
  old = now;
}
var talkbox2 = createSprite(2000, 200);
var pfp = createSprite(2000, 200);
epilouge.add(player); epilouge.add(mellow); epilouge.add(noticebubble); epilouge.add(talkbox2); epilouge.add(pfp);
epilouge.setVisibleEach(false);
//animation
player.setAnimation("void player walk up loop");
mellow.setAnimation("void mellow back");
noticebubble.setAnimation("notice");
talkbox2.setAnimation("textbox2");
pfp.setAnimation("mellow portrait normal");

//fix sprites
noticebubble.scale = 0.66;

function controll() {
  player.y -= 2;
  player.setAnimation("void player walk up loop")
}

function cam() {
  if (player.y == -600) {
    scene = 1;
    player.y = -601;
  }
  if (scene < 1) {
    if (player.y < camera.y - 10) {
      camera.y -= 2;
    }
    if (player.y > camera.y + 10) {
      camera.y += 2;
    }
  } else if (scene == 1) {
    scenetime += 1;
    if (scenetime > 60 && scenetime < 210) {
      camera.y -= 2;
    }
    if (scenetime > 270 && scenetime < 380) {
      player.y -= 2;
      player.setAnimation("void player walk up loop");
    }
    if (scenetime == 381) {
      player.setAnimation("void player walk up");
      player.setFrame(3);
    }
    if (scenetime == 390) {
      playSound("assets/ut-notice.mp3");
      noticebubble.x = mellow.x;
      noticebubble.y = mellow.y - 55;
    }
    if (scenetime == 450) {
      noticebubble.x = 2000;
    }
    if (scenetime == 530) {
      mellow.setAnimation("void mellow right");
    }
    if (scenetime == 610) {
      mellow.setAnimation("void mellow front");
    }
    if (scenetime == 650) {
      talkbox2.x = 200;
      talkbox2.y = camera.y + 150;
      pfp.x = 50;
      pfp.y = talkbox2.y;
    }
    if (scenetime > 650 && scenetime < 950) {
      fill("white");
      textSize(18);
      text("Oh! Howdy " + pname + "!\nDidn't see ya there", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 950 && scenetime < 1250) {
      pfp.setAnimation("mellow portrait sweat");
      fill("white");
      textSize(18);
      text("So, uh, How's it goin down here\nin the abyss?", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime == 1250) {
      pfp.visible = false;
      talkbox2.visible = false;
    }
    if (scenetime > 1280 && scenetime < 1320) {
      player.y -= 2;
      camera.y -= 2;
      pfp.y -= 2;
      talkbox2.y -= 2;
      player.setAnimation("void player walk up loop");
    }
    if (scenetime > 1295 && scenetime < 1320) {
      mellow.y -= 3;
    }
    if (scenetime == 1321) {
      pfp.setAnimation("mellow portrait shifty smile");
      player.setAnimation("void player walk up");
      player.setFrame(3);
    }
    if (scenetime > 1350 && scenetime < 1650) {
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("Hey, uh, not too close", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime == 1650) {
      pfp.visible = false;
      talkbox2.visible = false;
      mellow.setAnimation("void mellow right");
    }
    if (scenetime > 1700 && scenetime < 1730) {
      player.setFrame(2);
      player.y -= 2;
    }
    if (scenetime == 1731) {
      player.setFrame(3);
    }
    if (scenetime > 1800 && scenetime < 2000) {
      pfp.setAnimation("mellow portrait look down");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("...", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 2000 && scenetime < 2300) {
      pfp.setAnimation("mellow portrait sad");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("You uh... seemed to enjoy that,\nhuh?", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 2300 && scenetime < 2330) {
      mellow.y -= 1;
      pfp.visible = false;
      talkbox2.visible = false;
    }
    if (scenetime > 2500 && scenetime < 2800) {
      pfp.setAnimation("mellow portrait look down");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("Y'know...", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 2800 && scenetime < 3100) {
      pfp.setAnimation("mellow portrait sadder");
      fill("white");
      textSize(18);
      text("No matter how much you gain...\nThere's nothing getting you out...", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime == 3101) {
      pfp.visible = false;
      talkbox2.visible = false;
    }
    if (scenetime > 3200 && scenetime < 3260) {
      player.setAnimation("void player walk up loop");
      player.y -= 1;
      pfp.y -= 1;
      talkbox2.y -= 1;
      camera.y -= 1;
    }
    if (scenetime == 3261) {
      player.setAnimation("void player walk up");
      player.setFrame(3);
    }
    if (scenetime > 3400 && scenetime < 3700) {
      pfp.setAnimation("mellow portrait sad");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("And, even if you somehow\ndid get out, well...", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 3700 && scenetime < 4000) {
      pfp.setAnimation("mellow portrait sadder");
      fill("white");
      textSize(18);
      text("There's not much but a blinding\nwhite void", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime == 4001) {
      pfp.visible = false;
      talkbox2.visible = false;
    }
    if (scenetime > 4600 && scenetime < 4900) {
      pfp.setAnimation("mellow portrait look down");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("...", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 4900 && scenetime < 5200) {
      pfp.setAnimation("mellow portrait sadder");
      fill("white");
      textSize(18);
      text("You had friends down here to\ntalk with.", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 5200 && scenetime < 5500) {
      pfp.setAnimation("mellow portrait sadder");
      fill("white");
      textSize(18);
      text("Jester, Noodles, Obsoodles...\ndid they mean nothing to you?", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 5500 && scenetime < 5520) {
      pfp.visible = false;
      talkbox2.visible = false;
      player.setAnimation("void player walk up loop");
      player.y -= 1;
      pfp.y -= 1;
      talkbox2.y -= 1;
      camera.y -= 1;
    }
    if (scenetime == 5521) {
      player.setAnimation("void player walk up");
      player.setFrame(3);
    }
    if (scenetime > 5600 && scenetime < 5900) {
      pfp.setAnimation("mellow portrait look down");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("Well...", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 5900 && scenetime < 6200) {
      pfp.setAnimation("mellow portrait sad");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("I am suprised you beat Scott", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime > 6200 && scenetime < 6500) {
      pfp.setAnimation("mellow portrait sad");
      pfp.visible = true;
      talkbox2.visible = true;
      fill("white");
      textSize(18);
      text("Knocking him down is no easy\nfeat, let alone killing him", pfp.x + 50, talkbox2.y - 15);
    }
    if (scenetime == 6501) {
      pfp.visible = false;
      talkbox2.visible = false;
      player.setAnimation("void player face")
    }
    if (scenetime > 6501) {
      fill(255);
      textSize(30);
      textAlign(CENTER)
      text("THANKS FOR PLAYING\nUNTIL NEXT TIME!", 200, talkbox2.y - 55);
    }
  }
}

//World.frameRate = 60; Original trailer is 30 we jump to 60 for gameplay
showMobileControls(true, true, false, true);
var battlesong = "assets/dr-vs-kris.mp3"; //no more going back to change the song everytime it's restarted
playSound(battlesong, false, function(){stopSound(battlesong)})
/*
CREDITS:
Fazy created the song used in this project called Vs. Kris
https://youtu.be/VI11xWXRP4E

Thank you Varrience for letting me know how
to make the speech work like undertale
The code in dospeech() is that code & Implementing the trailer for the game



More games on my website
https://tinyurl.com/noobsite
*/
var dev = 0;
//variables
var php = 92; // player hp
var phpmax = 92; // player max hp
var iframe = 0; //player's invincibility frames (only when karma is disabled)
var pdmg = 2; //player attack damage
var lv = 19; //Player level. Only visual.
var kr = 0; //karma/poison damage
var krt = 0; //karma drain timer
var kractive = 1; //does the player take karma/poison damage? (0 = false, 1 = true)
var mode = 0;
/*
it's a huge mess, I know, sorry.
I'm not good at coding, but hey, at least it works =p
that's why one of the items is spaghetti
-60 = item eaten text
-53 = item menu
-51 = check text
-50 = speech mode (enemy is talking)
-2 = ACT menu
0 = Battle menu
1 = red soul
2 = blue soul
*/
var itemused = 0; //saves last item used. For showing the description of a used item.
var dmgmult = 1; //damage taken multiplier
var ipage = 1;
var Item = /** @class */ (function () {
  function Item(name, desc, heal) {
    this.name = name || "";
    this.desc = desc || "";
    this.heal = heal || 0;
    this.used = false;
  }
  return Item;
}());
var items = [
  new Item("CrmlC.Cake", "You ate the Caramel Cheesecake\nHP Fully restored", 100),
  new Item("SpaghettiChip", "You ate the Spaghetti Chip\nTastes metalic\n65 HP restored", 65),
  new Item("DinoNugg", "You ate the Dinosaur Chicken Nugget\n35 HP restored", 35),
  new Item("VeganBurger", "You ate the Vegan Burger\n40 HP restored", 40),
  new Item("S'more", "You became a canibal and ate the s'more\n30 HP restored", 30),
  new Item("S'more", "You became a canibal and ate the s'more\n30 HP restored", 30),
  new Item("PockyStick", "You ate the Pocky Stick\n18 HP restored", 18),
  new Item("PockyStick", "You ate the Pocky Stick\n18 HP restored", 18)
];
var jumps = 1;
var select = 1;
var pname = "";
var sname = "";
var speech = 0; //progress through the fight
var ftrand = 0; //what flavor text is shown
var deaths = 0; //how many times has the player died
var ehp = 104; //enemy health
var ehpmax = 104; //enemy max health
var edmg = 1; //enemy damage. Recommend leaving at 1 if karma is enabled
var evdmg = 120; //enemy damage. Visual only (for checking)
var evdef = 80; //enemy defence. Visual only (for checking)
var atknow = 0; //enemy's current attack. changing directly here does nothing
var atktime = 0; //how long the attack is. changing directly here does nothing
var phase = 1; //what part of the fight we are on
//talk stuff
var delay = 0;
var speed = 2;
var pos = 0;
var msg = "Greetings.\nThe name's Scott \nthe Magician";
var sound = "assets/scott-speech-i.mp3";
//sprites
var fightbtn = createSprite(50, 380);
var actbtn = createSprite(150, 380);
var itembtn = createSprite(250, 380);
var mercybtn = createSprite(350, 380);
var soul = createSprite(200, 260);
var topwall = createSprite(200, 220);
var bottomwall = createSprite(200, 300);
var leftwall = createSprite(20, 260);
var rightwall = createSprite(380, 260);
var talkbox = createSprite(300, 65);
var enemy = createSprite(200, 120);
//animations
fightbtn.setAnimation("FIGHT");
actbtn.setAnimation("ACT");
itembtn.setAnimation("ITEM");
mercybtn.setAnimation("MERCY");
soul.setAnimation("red soul small");
topwall.setAnimation("sideways bar");
bottomwall.setAnimation("sideways bar");
leftwall.setAnimation("up down bar");
rightwall.setAnimation("up down bar");
talkbox.setAnimation("textbox");
enemy.setAnimation("Scott idle better");
//attack sprites
var platform1 = createSprite(2000, 275);
platform1.scale = 0.65;
var platform2 = createSprite(2000, 275);
platform2.scale = 0.65;
var slipplatform1 = createSprite(2000, 275);
slipplatform1.scale = 0.65;
var slipplatform2 = createSprite(2000, 275);
slipplatform2.scale = 0.65;
var ace1 = createSprite(50, 2600);
var ace2 = createSprite(350, 2600);
var ace3 = createSprite(120, 2600);
var ace4 = createSprite(280, 2600);
var split = createSprite(2000, 260);
var warnsplit = createSprite(2000, 260);
var splitkill = createSprite(2000, 260);
var sparkle = createSprite(2000, 260);
var sprkwarn = createSprite(2000, 260);
var hatblast = createSprite(20000, 200);
var hat = createSprite(2000, 200);
var wand1 = createSprite(2000, 280);
var wand2 = createSprite(2000, 280);
var deathwands = createSprite(2000, 260);
var longwand = createSprite(2000, 260);
var spikefloor = createSprite(2000, 290);
var colorblast = createSprite(2000, 200);
var colorhat = createSprite(2000, 200);
var hurtcolor = 0; //for easily telling if the color is orange(1) or blue(2)
var color1 = 0;
var color2 = 0;
var color3 = 0;
var spikewand1 = createSprite(2000, 200);
var spikewand2 = createSprite(2000, 200);
platform1.setAnimation("platform");
platform2.setAnimation("platform");
slipplatform1.setAnimation("platform no drag");
slipplatform2.setAnimation("platform no drag");
split.setAnimation("up down split");
warnsplit.setAnimation("up down split warn");
splitkill.setAnimation("up down split kill");
sparkle.setAnimation("magic sparkle");
sprkwarn.setAnimation("sparkle warn");
hat.setAnimation("top blaster");
hatblast.setAnimation("boom!");
ace1.setAnimation("Ace Diamond");
ace2.setAnimation("Ace Diamond");
ace3.setAnimation("Ace Diamond");
ace4.setAnimation("Ace Diamond");
wand1.setAnimation("wand");
wand2.setAnimation("wand");
deathwands.setAnimation("death wands");
longwand.setAnimation("long wand");
spikefloor.setAnimation("spiked floor");
colorhat.setAnimation("top blaster");
colorblast.setAnimation("boom!");
//.tint = "#ffb400"; orange
//.tint = "#0000ff"; blue
spikewand1.setAnimation("spiked wand");
spikewand2.setAnimation("spiked wand");
//sprite fixing (collision and size and such)
fightbtn.scale = 0.5;
actbtn.scale = 0.5;
itembtn.scale = 0.5;
mercybtn.scale = 0.5;
talkbox.scale = 0.75;
talkbox.visible = false;
ace1.scale = 0.5;
ace2.scale = 0.5;
ace3.scale = 0.5;
ace4.scale = 0.5;
hatblast.setCollider("rectangle", 225, 0, 450, 30, 0);
colorblast.setCollider("rectangle", 225, 0, 450, 30, 0);
soul.setCollider("rectangle", 0, -1, 9, 9);
noCursor();
var tim = 0;
var Keyboard = /** @class */ (function () {
  function Keyboard() {
    this.keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
      "q", "w", "e", "r", "t", "y", "u", "i", "o",
      "p", "a", "s", "d", "f", "g", "h", "j", "k",
      "l", "z", "x", "c", "v", "b", "n",
      "m", "shift", "space", "back", "done"];
    this.macros = [];
    this.macros[8] = "backspace";
    this.macros[13] = "enter";
    this.macros[32] = " ";
    this.macros[LEFT_ARROW] = "left";
    this.macros[RIGHT_ARROW] = "right";
    this.macros[UP_ARROW] = "up";
    this.macros[DOWN_ARROW] = "down";
    this.cell = Math.floor((width - 50) / 9);
    this.name = "";
    this.shift = 0;
    this.selected = 0;
    this.cursor = "|";
    this.alarm = [0, 60 / 4, 60 / 8];
    this.limit = 20;
    this.bclr = "black";
    this.clr = "white";
    this.clock = 30;
    this.repeat = false;
    window["\u0063" + "\u006f" + "\u006e" + "\u0073" + "\u006f" + "\u006c" + "\u0065"]["\u006c" + "\u006f" + "\u0067"]("\u0054\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u0020\u0077\u0061\u0073\u0020\u006d\u0061\u0064\u0065\u0020\u0062\u0079\u0020\u0040\u0056\u0061\u0072\u0072\u0069\u0065\u006e\u0063\u0065\u0020\u0026\u0020\u0040\u004d\u0065\u006c\u006c\u006f\u0077");
  }
  Keyboard.prototype.main = function () {
    background(this.bclr);
    drawSprite(story);
    background(0, 0, 0, 180 + noise(World.frameCount / 30) * 50);
    var ki, row;
    ki = row = 0;
    for (var i = 0; i < this.keys.length; i++) {
      if (ki > 9) {
        ki = 0;
        row += 1;
      }
      ki += 1;
      if (i == this.selected) {
        fill("darkGrey");
        this.selected = i;
      }
      else {
        fill("black");
      }
      stroke("black");
      rect((ki - 1) * this.cell + 8, row * (this.cell + this.cell / 4) + 220, this.cell, this.cell);
      fill("white");
      stroke("white");
      textSize(12);
      textAlign(CENTER, CENTER);
      if (i > 9 && i < 36 && this.shift > 0) {
        this.keys[i] = this.keys[i].toUpperCase();
      }
      else if (i > 9 && i < 36 && this.shift == 0) {
        this.keys[i] = this.keys[i].toLowerCase();
      }
      text(this.keys[i], (ki - 1) * this.cell + (this.cell / 2) + 8, row * (this.cell + this.cell / 4) + 220 + (this.cell / 2));
    }
    // key navigation keys no mouse arcade feel
    // up
    if (this.selected > 9 && (keyWentDown("up") || keyDown("up") && this.repeat)) {
      this.selected -= 10;
      playSound("assets/ut-change-select.mp3");
    }
    else if (this.selected <= 9 && (keyWentDown("up") || keyDown("up") && this.repeat)) {
      this.selected += 30;
      playSound("assets/ut-change-select.mp3");
    }
    /// down
    if (this.selected < 30 && (keyWentDown("down") || keyDown("down") && this.repeat)) {
      this.selected += 10;
      playSound("assets/ut-change-select.mp3");
    }
    else if (this.selected >= 30 && (keyWentDown("down") || keyDown("down") && this.repeat)) {
      this.selected -= 30;
      playSound("assets/ut-change-select.mp3");
    }
    // right
    if (this.selected < this.keys.length - 1 && (keyWentDown("right") || keyDown("right") && this.repeat)) {
      this.selected += 1;
      playSound("assets/ut-change-select.mp3");
    }
    else if (this.selected >= this.keys.length - 1 && (keyWentDown("right") || keyDown("right") && this.repeat)) {
      this.selected = 0;
      playSound("assets/ut-change-select.mp3");
    }
    // left
    if (this.selected > 0 && (keyWentDown("left") || keyDown("left") && this.repeat)) {
      this.selected -= 1;
      playSound("assets/ut-change-select.mp3");
    }
    else if (this.selected <= 0 && (keyWentDown("left") || keyDown("left") && this.repeat)) {
      this.selected = this.keys.length - 1;
      playSound("assets/ut-change-select.mp3");
    }
    fill("black");
    stroke("black");
    textAlign(LEFT, BASELINE);
    textSize(30);
    // keyboard basic key select
    if (this.selected < 36 && keyWentDown("enter") || this.selected < 36 && keyDown("enter") && this.repeat) {
      playSound("assets/ut-select.mp3");
      this.name += this.keys[this.selected];
      if (this.shift == 1) {
        this.shift = 0;
      }
    }
    else if (this.selected >= 36 && keyWentDown("enter") || this.selected >= 36 && keyDown("enter") && this.repeat) {
      switch (this.keys[this.selected]) {
        case "shift":
          playSound("assets/ut-select.mp3");
          this.shift += 1;
          if (this.shift > 2) {
            this.shift = 0;
          }
          break;
        case "space":
          playSound("assets/ut-select.mp3");
          this.name += " ";
          break;
        case "back":
          playSound("assets/ut-select.mp3");
          this.name = this.name.substring(0, this.name.length - 1);
          break;
        case "done":
          playSound("assets/ut-select.mp3");
          pname = this.name;
          playSound(battlesong, true, function () {
            World.frameRate = 60;
            timer = 0;
            story.play();
            story.visible = false;
            sname = pname.toLowerCase();
            if (sname == "sans" || sname == "nohit") {
              phpmax = 1;
              lv = 0;
            }
            else if (sname == "frisk" || sname == "memory") {
              phpmax = 20;
              lv = 1;
            }
            else if (sname == "chara") {
              phpmax = 99;
              php = 99;
              lv = 20;
            }
            else if (sname == "phase2") {
              ehp = 54;
              speech = 25;
              item[0].heal = 5;
              item[0].desc = "You ate the Cheater's Cake\n5 HP restored";
              php = 46;
            }
            isTrailer = false;
          });
          break;
      }
    }
    // enable specific keyboard typing
    for (i = 0; i <= this.keys.length - 5; i++) {
      if (keyWentDown(this.keys[i]) || (keyDown(this.keys[i] && this.repeat))) {
        this.name += this.keys[i];
        if (this.shift == 1) {
          this.shift = 0;
        }
      }
    }
    if (keyWentDown(this.keys[36])) {
      this.shift += 1;
      if (this.shift > 2) {
        this.shift = 0;
      }
    }
    if (keyWentDown(" ") || keyDown(this.macros[32]) && this.repeat) {
      this.name += " ";
    }
    if (keyWentDown(this.macros[8]) || keyDown(this.macros[8]) && this.repeat) {
      this.name = this.name.substring(0, this.name.length - 1);
    }
    // cursor blink alarm #0
    if (this.alarm[0] > 0) {
      this.alarm[0] -= 1;
    }
    else {
      this.alarm[0] = this.clock / 3;
      this.cursor = this.cursor === "" ? "|" : "";
    }
    // charecter limit
    if (this.name.length >= this.limit) {
      this.name = this.name.substring(0, this.limit);
    }
    ///////////////////// message box typig center /////////////////////////
    fill(this.clr);
    text("Name: " + this.name + this.cursor, 0, 30);
    // repeat key press alarm # 1
    if (keyDown(char(keyCode)) || keyDown(this.macros[keyCode])) {
      this.alarm[1] -= 1;
      this.repeat = false;
    }
    else {
      this.alarm[1] = this.clock / 4;
      this.repeat = false;
    }
    if (this.alarm[1] < 0) {
      this.repeat = true;
      this.alarm[1] = this.clock / 12;
    }
    // UI ENDS HERE
  };
  return Keyboard;
}());
var keyboard = new Keyboard();
function draw() {
  if (isTrailer) {
    if (loading) {
      return;
    }
    calculate();
    timer += delta;
    var t = Math.floor(timer);
    background(0);
    drawSprite(story);
    if (t > 1500 || keyWentDown("space")) {
      stopSound();
      camera.x = camera.y = 200;
      story.y = 135;
      camera.zoom = 1;
      story.setAnimation("sussier smile")
      story.setFrame(4);
      story.pause();
      //story.visible = false;
      if (timer > 1502) {
        keyboard.main();
      } else if (timer < 1500) {
        timer = 1500;
      }
      return;
    }
    if (t > 0 && t < 120) {
      fill("orange");
      textSize(24);
      story.visible = true;
      text("Twas a normal time in the abyss", 25, 275);
      fill(255, 255, 255, 60 - 60 * (t / 120));
      textSize(30);
      text("Press Space to Skip", 65, 395);
    }
    if (t > 120 && t < 240) {
      fill("orange");
      textSize(24);
      text("Then a new comer came to town", 25, 275);
      story.setAnimation("plusquil");
    }
    if (t > 240 && t < 360) {
      fill("orange");
      textSize(24);
      text("People thought that they'd meet a\n                new friend", 25, 275);
      story.setAnimation("plusquil fren");
    }
    if (t > 360 && t < 420) {
      fill("orange");
      textSize(24);
      text("But as it turns out...", 90, 275);
      story.setAnimation("plusquil sus");
    }
    if (t == 420) {
      camera.zoom = 1.1;
      camera.y = 150;
      story.setAnimation("plusquil evil");
    }
    if (t > 420 && t < 480) {
      fill("red");
      textSize(24);
      text("it was a wolf in sheeps clothing", 40, 300);
      // things aren't aways as it seems
      // it would be something terrible
      // calamity was around the corner
    }
    if (t == 480) {
      camera.zoom = 1;
      camera.y = 200;
      story.setAnimation("plusqiul knife");
      story.y = 200;
    }
    if (t > 480 && t < 600) {
      camera.x += 0.3 * delta;
    }
    if (t == 600) {
      //it's a hand, doofus
      story.setAnimation("plusquil squish");
      playSound("assets/ut-monster-dust.mp3");
    }
    if (t > 600 && t < 720) {
      camera.zoom += 0.005 * delta;
    }
    if (t == 720) {
      camera.zoom = 1;
      story.setAnimation("darby ded");
      playSound("assets/ut-monster-dust.mp3");
    }
    if (t > 720 && t < 840) {
      camera.x -= 0.3 * delta;
    }
    if (t == 840) {
      story.setAnimation("jester angry");
      playSound("assets/ut-monster-dust.mp3");
    }
    if (t > 840 && t < 960) {
      camera.x += 0.3 * delta;
      camera.zoom += 0.005 * delta;
    }
    if (t == 960) {
      camera.x = 200;
      camera.zoom = 1;
      story.tint = "#ff6500";
      story.setAnimation("plusquil barrier");
      playSound("assets/ut-monster-dust.mp3");
    }
    //39679
    if (t == 970) {
      story.tint = "#ff7622";
    }
    if (t == 980) {
      story.tint = "#ff8844";
    }
    if (t == 990) {
      story.tint = "#ff9966";
    }
    if (t == 1000) {
      story.tint = "#ffaaaa";
    }
    if (t == 1010) {
      story.tint = "#ffbbbb";
    }
    if (t == 1020) {
      story.tint = "#ffcccc";
    }
    if (t == 1030) {
      story.tint = "#ffdddd";
    }
    if (t == 1040) {
      story.tint = "#ffeeee";
    }
    if (t == 1050) {
      story.tint = "#ffffff";
    }
    if (t > 960 && t < 1080) {
      camera.x = Math.random() * 10 + 195;
      camera.y = Math.random() * 4 + 198;
      //camera.zoom = random(0.5)+0.5;
    }
    if (t == 1080) {
      story.setAnimation("dust hand");
      camera.x = 180;
      camera.y = 270;
      camera.zoom = 1.2;
    }
    if (t > 1080 && t < 1200) {
      camera.y -= delta;
    }
    if (t == 1200) {
      camera.x = 200;
      camera.y = 200;
      story.setAnimation("plusquil suprise");
    }
    if (t > 1200 && t < 1320) {
      camera.zoom -= 0.0016 * delta;
    }
    if (t == 1320) {
      camera.zoom = 1;
      story.visible = false;
      story.setAnimation("sus smile");
    }
    if (t == 1380) {
      story.visible = true;
    }
    if (t == 1430) {
      //END
      camera.zoom = 1.4;
      story.setAnimation("sussier smile");
    }
    return;
  }
  if (isEpilouge) {
    if (loading) {
      drawSprite(story);
      return;
    }
    background(0);
    drawSprites(epilouge);
    if (scene <= 0) {
      controll();
    }
    cam();
    background(0, 0, 0, noise(World.frameCount / 60) * 255);
    return;
  }
  iframe -= 1;
  phasechange();
  if (kractive == 0 && iframe > 0 && mode == 1) {
    soul.setAnimation("red soul iframe");
  }
  else if (kractive == 0 && iframe > 0 && mode == 2) {
    soul.setAnimation("blue soul iframe");
  }
  else if (kractive == 0 && iframe > 0 && mode > -5) {
    soul.setAnimation("red soul iframe");
  }
  background("black");
  collide();
  hud();
  if (atktime > 0) {
    playattack();
    if (soul.y > 300) {
      soul.y = 260;
      soul.x = 200;
    }
  }
  else if (mode > 0) {
    //RESET ATTACKS HERE
    colorblast.x = 20000;
    colorhat.x = 20000;
    longwand.velocityX = 0;
    longwand.velocityY = 0;
    longwand.x = 2000;
    longwand.rotationSpeed = 0;
    platform1.x = 2000;
    platform2.x = 2000;
    platform1.velocityX = 0;
    platform2.velocityX = 0;
    slipplatform1.x = 2000;
    hurtcolor = 0;
    mode = 0;
    spikewand1.x = 2000;
    spikewand2.x = 2000;
    spikewand1.rotation = 0;
    spikewand2.rotation = 0;
    spikewand1.setVelocity(0, 0);
    spikewand2.setVelocity(0, 0);
    split.x = 2000;
    splitkill.x = 2000;
    sparkle.x = 2000;
    sparkle.velocityX = 0;
    sparkle.velocityY = 0;
    sprkwarn.x = 2000;
    hat.x = 2000;
    hat.rotation = 0;
    hatblast.x = 20000;
    hat.rotationSpeed = 0;
    hat.setVelocity(0, 0);
    ace1.x = 2000;
    ace2.x = 2000;
    ace3.x = 2000;
    ace4.x = 2000;
    wand1.velocityX = 0;
    wand2.velocityX = 0;
    wand1.x = 2000;
    wand2.x = 2000;
    spikefloor.x = 2000;
    deathwands.x = 2000;
  }
  if (keyWentDown("r") && php == -1 || keyWentDown("space") && php == -1) {
    restart();
  }
  if (mode == 0) {
    flavortext();
  }
  drawSprites();
  control();
  if (dev == 1 && php > 0) {
    devstuff();
  }
  if (kr > php + phpmax) {
    kr = phpmax;
  }
  if (atktime == 4999850) {
    deathwands.x = 200;
    enemy.setAnimation("Scott shrug");
  }
  else if (atktime == 4999250) {
    enemy.setAnimation("Scott shrug blink");
  }
  else if (atktime == 4998950) {
    enemy.setAnimation("Scott sweat");
  }
  else if (atktime == 4998770) {
    enemy.setAnimation("Scott sweat blink");
  }
  else if (atktime == 4998410) {
    enemy.setAnimation("Scott sweat");
  }
  else if (atktime == 4998380) {
    deathwands.x = 200000;
  }
  else if (atktime == 4998080) {
    enemy.setAnimation("Scott spooked");
  }
  else if (atktime == 4997600) {
    enemy.setAnimation("Scott sweat");
  }
  if (atktime < 4998770 && atktime > 4998410) {
    fill("white");
    textSize(12);
    text("Are you gonna die, or...", 265, 45);
  }
  else if (atktime < 4998410 && atktime > 4998080) {
    fill("white");
    textSize(12);
    text("Oh forget it", 265, 45);
  }
  else if (atktime < 4998080 && atktime > 4997600) {
    fill("white");
    textSize(12);
    text("Ok what in the hell?", 265, 45);
  }
  else if (atktime < 4997600 && atktime > 4990000) {
    fill("white");
    textSize(12);
    text("Aight screw it,\nusing the insta kill", 265, 45);
  }
  if (atktime < 4997600 && atktime > 4997300) {
    warnsplit.x = soul.x;
  }
  else if (atktime > 4997000) {
    split.x = warnsplit.x;
    splitkill.x = warnsplit.x;
  }
  lose();
  if (ehp <= 0 && (mode > 0 || mode == -50)) {
    playSound("assets/ut-level-up.mp3");
    playSound("assets/ut-monster-dust.mp3");
    enemy.setAnimation("Scott dust");
    mode = -100;
    return;
  }
  if (mode == -100) {
    colorblast.x = 20000;
    colorhat.x = 20000;
    longwand.velocityX = 0;
    longwand.velocityY = 0;
    longwand.x = 2000;
    longwand.rotationSpeed = 0;
    platform1.x = 2000;
    platform2.x = 2000;
    platform1.velocityX = 0;
    platform2.velocityX = 0;
    slipplatform1.x = 2000;
    hurtcolor = 0;
    spikewand1.x = 2000;
    spikewand2.x = 2000;
    spikewand1.setSpeedAndDirection(0, 0);
    spikewand2.setSpeedAndDirection(0, 0);
    split.x = 2000;
    splitkill.x = 2000;
    sparkle.x = 2000;
    sparkle.velocityX = 0;
    sparkle.velocityY = 0;
    sprkwarn.x = 2000;
    hat.x = 2000;
    hat.rotation = 0;
    hatblast.x = 20000;
    hat.rotationSpeed = 0;
    hat.setVelocity(0, 0);
    ace1.x = 2000;
    ace2.x = 2000;
    ace3.x = 2000;
    ace4.x = 2000;
    wand1.velocityX = 0;
    wand2.velocityX = 0;
    wand1.x = 2000;
    wand2.x = 2000;
    spikefloor.x = 2000;
    soul.y = 200000;
    stopSound(battlesong);
    fill("white");
    textSize(36);
    text("*\n*\n*", 30, 263);
    textSize(18);
    text("YOU WON!\nYou earned 874 EXP and 467 gold\nYour LOVE increased.", 50, 250);
    kr = 0;
    lv = 20;
    phpmax = 99;
    php = phpmax;
    isEpilouge = true;
    loading = true;
    setTimeout(function () {
      story.y = 135;
      story.setAnimation("sussier smile")
      story.pause();
      story.setFrame(4);
      story.visible = true;
      story.scale = 2.3;
      story.alpha = 0.005;
      playSound("assets/crash-loop.mp3", true, function () {
        setTimeout(function () {
          stopSound();
          story.visible = false;
          playSound("assets/ut-geno-wind-loop.mp3", true, function () {
            loading = false;
            epilouge.setVisibleEach(true);
          });
        }, 3e3);
      })
    }, 2e3)
  }
}
//functions
function devstuff() {
  fill("white");
  noStroke();
  textSize(18);
  text(atktime + "\n" + Math.round(atktime / 60) + "\n" + speech, 5, 20);
  if (phpmax > 150) {
    text("\n\n\n" + php + "/" + phpmax, 5, 20);
  }
  textSize(14);
  if (kr > 0) {
    fill("magenta");
  }
  text(kr, 220, 320);
  if (keyWentDown("e")) {
    playSound("assets/ut-heal.mp3");
    php += 35;
    kr = 0;
  }
  if (keyWentDown("q")) {
    playSound("assets/ut-hurt.mp3");
    php -= Math.round(35 / 3);
  }
  if (keyWentDown("t")) {
    playSound("assets/ut-hurt.mp3");
    kr += Math.round(35 / 3);
  }
  if (keyWentDown("o")) {
    playSound("assets/ut-level-up.mp3");
    phpmax += 12;
    php = phpmax;
    lv += 3;
  }
  if (keyWentDown("u")) {
    playSound("assets/ut-soul-shatter.mp3");
    phpmax -= 12;
    lv -= 3;
  }
  if (keyDown("i")) {
    camera.y -= 5;
  }
  if (keyDown("k")) {
    camera.y += 5;
  }
  if (keyDown("j")) {
    camera.x -= 5;
  }
  if (keyDown("l")) {
    camera.x += 5;
  }
  if (keyWentDown("m")) {
    enemy.setAnimation("Scott idle better");
    pos = 0;
    speech += 1;
    ehp -= 2;
  }
}
var maxflav = 14; //how much flavor text is there
function flavortext() {
  //all name specific texts are my characters, other than the obvious undertale/deltarune names, and Mellohi
  fill("white");
  textSize(36);
  text("*", 30, 263);
  textSize(18);
  if (ftrand == -3) {
    fill("yellow");
    stroke("yellow");
    text("Scott is sparing you", 50, 250);
  }
  if (ftrand == 0) { //encounter text
    if (sname == "scott") {
      text("There can only be one", 50, 250);
    }
    else if (sname == "mellow") {
      text("You aren't really a king, are you?", 50, 250);
    }
    else if (sname == "fruity") {
      text("Finally standing up for yourself I see", 50, 250);
    }
    else if (sname == "kitkat") {
      enemy.setAnimation("Scott angry");
      fill("red");
      text("You should've never come", 50, 250);
    }
    else if (sname == "darby") {
      enemy.setAnimation("Scott angry");
      fill("red");
      text("You've made your greatest mistake", 50, 250);
    }
    else if (sname == "carl") {
      text("What happened to you?", 50, 250);
    }
    else if (sname == "jester") {
      enemy.setAnimation("Scott sus");
      text("Not you again", 50, 250);
    }
    else if (sname == "chara" || sname == "flowey" || sname == "sans" || sname == "kris" || sname == "jevil" || sname == "spam") {
      text("How interesting...", 50, 250);
    }
    else if (sname == "merg") {
      enemy.setAnimation("Scott angry");
      fill("red");
      text("Don't you make a fool out of me,\nyou damned cherry", 50, 250);
    }
    else if (sname == "gaster") {
      text("✋ ✌💣 ✋☼☼☜☹☜✞✌☠❄ ❄⚐ ❄☟☜\n💧❄⚐☼✡", 50, 250);
      lv = "???";
      phpmax = 300;
      php = 300;
      pname = "*!&^(;";
      stopSound();
      playSound("assets/crash-loop.mp3", true);
      gaster; //crashes deltarune and undertale, so why not this project too?
    }
    else {
      if (deaths == 0) {
        text("A Magician blocked your way", 50, 250);
      }
      else {
        text("Scott blocks your way", 50, 250);
      }
    }
  }
  else if (ftrand == 1) {
    if (pname == "Darby") {
      text("Smells disgusting", 50, 250);
    }
    else {
      text("Smells like magic", 50, 250);
    }
  }
  else if (ftrand == 2) {
    text("Smells like melted marshmallow", 50, 250);
  }
  else if (ftrand == 3) {
    text("Melted marshmallow surrounds the\nfield of nothing", 50, 250);
  }
  else if (ftrand == 4) {
    if (pname == "Darby" || pname == "KitKat" || pname == "Jester") {
      text("His mask stares right through you", 50, 250);
    }
    else {
      text("His mask stares blankly at you", 50, 250);
    }
  }
  else if (ftrand == 5) {
    if (pname == "KitKat") {
      text("Nothing about this situations seems\ncomical. Not even his tie", 50, 250);
    }
    else {
      text("Something about his tie seems\ncomical", 50, 250);
    }
  }
  else if (ftrand == 6) {
    if (pname == "Carl" || pname == "Fruity") {
      text("Something tells you that you're\nnot supposed be here", 50, 250);
    }
    else {
      text("Something tells you that he's\nnot supposed be here", 50, 250);
    }
  }
  else if (ftrand == 7) {
    if (pname == "Mellow") {
      text("The Abyss is more empty than\nit usually is", 50, 250);
    }
    else {
      text("The wind howls in the abyss", 50, 250);
    }
  }
  else if (ftrand == 8) {
    text("Magic dust fills the air", 50, 250);
  }
  else if (ftrand == 9) {
    text("No tricks, thank you", 50, 250);
  }
  else if (ftrand == 10) {
    if (kr > 0) {
      text("You feel something breathing down\nyour neck", 50, 250);
    }
    else {
      text("The cold breeze sends shivers down\nyour spine", 50, 250);
    }
  }
  else if (ftrand == 11) {
    if (kr > 8) {
      text("Feels like something tapped your\nsholder", 50, 250);
    }
    else {
      text("Scott checks for something in his\npocket", 50, 250);
    }
  }
  else if (ftrand == 12) {
    if (kr > 5) {
      text("Feels like something's staring you down\nAnd it isn't the mask", 50, 250);
    }
    else {
      text("Feels like something's watching", 50, 250);
    }
  }
  else if (ftrand == 13) {
    if (kr > 10) {
      text("Feels like whispering in your ear", 50, 250);
    }
    else {
      text("Scott mutters something to\nhimself", 50, 250);
    }
  }
  else if (ftrand == 14) {
    if (pname == "Mellow") {
      text("Something tells you that\nyou're not the person of interest", 50, 250);
    }
    else {
      text("Broken glass is shattered about", 50, 250);
    }
  }
}
function collide() {
  if (mode > 0) {
    soul.collide(topwall);
    soul.collide(leftwall);
    soul.collide(rightwall);
    if (soul.collide(splitkill)) {
      php = 0;
      kr = 0;
    }
    soul.collide(split);
    if (soul.collide(bottomwall)) {
      jumps = 1;
      soul.velocityY = 0;
      soul.y = bottomwall.y - 5;
    }
  }
  if (soul.y < platform1.y && mode == 2 && soul.isTouching(platform1)) {
    soul.collide(platform1);
    jumps = 1;
    soul.velocityY = 0;
    soul.y = platform1.y - 5;
    soul.velocityX = platform1.velocityX;
  }
  else if (soul.y < platform2.y && mode == 2 && soul.isTouching(platform2)) {
    soul.collide(platform2);
    jumps = 1;
    soul.velocityY = 0;
    soul.y = platform2.y - 5;
    soul.velocityX = platform2.velocityX;
  }
  else {
    soul.velocityX = 0;
  }
  if (soul.y < slipplatform1.y - 5 && mode == 2 && soul.isTouching(slipplatform1)) {
    soul.collide(slipplatform1);
    jumps = 1;
    soul.velocityY = 0;
    soul.y = slipplatform1.y - 10;
  }
  //touch ouchies
  if (soul.isTouching(sparkle) || soul.isTouching(hatblast) ||
    soul.isTouching(ace1) || soul.isTouching(ace2) ||
    soul.isTouching(ace3) || soul.isTouching(ace4) ||
    soul.isTouching(wand1) || soul.isTouching(wand2) ||
    soul.isTouching(deathwands) || soul.isTouching(spikefloor) ||
    soul.isTouching(longwand) || soul.isTouching(spikewand1) ||
    soul.isTouching(spikewand2)) {
    hurt();
  }
  if (hurtcolor == 1 && soul.isTouching(colorblast)) {
    if (!keyDown("w") && !keyDown("s") && !keyDown("d") && !keyDown("a") &&
      !keyDown("up") && !keyDown("down") && !keyDown("left") && !keyDown("right")) {
      hurt();
    }
  }
  else if (hurtcolor == 2 && soul.isTouching(colorblast)) {
    if (keyDown("w") || keyDown("s") || keyDown("d") || keyDown("a") ||
      keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
      hurt();
    }
  }
} //includes damaging events
function hud() {
  //non-changing stats
  fill("white");
  textSize(20);
  stroke("white");
  strokeWeight(1);
  if (pname == null || pname == "") {
    pname = "Plusquil";
  }
  text(pname, 5, 340);
  text("LV " + lv, 90, 340);
  textSize(12);
  text("HP", 160, 340);
  //hp
  if (kr > 0) {
    fill("magenta");
    stroke("magenta");
  }
  textSize(20);
  if (kractive == 0) {
    text(php + "/" + phpmax, 190 + phpmax, 342);
  }
  else {
    text(php + "/" + phpmax, 210 + phpmax, 342);
    textSize(14);
    fill("white");
    stroke("white");
    text("kr", 190 + phpmax, 340);
  }
  noStroke();
  fill("red");
  rect(185, 325, phpmax, 20);
  fill("yellow");
  rect(185, 325, php, 20);
  fill("magenta");
  rect(185 + php - kr, 325, kr, 20);
  //poison speed
  if (kr > 0) {
    krt -= 1;
    if (krt <= 0) {
      krt = 50;
      kr -= 1;
      php -= 1;
    }
    if (kr > 15) {
      krt -= 2;
    }
    if (kr > 30) {
      krt -= 3;
    }
    if (kr > 45) {
      krt -= 5;
    }
    if (kr > 60) {
      krt -= 10;
    }
    if (kr > php - 1) {
      kr -= 2;
      php -= 1;
    }
  }
  if (kr < 0) {
    kr = 0;
  }
  if (php > phpmax) {
    php = phpmax;
  }
  //enemy hp
  fill("gray");
  rect(145, 200, ehpmax, 15);
  fill("lime");
  rect(145, 200, ehp, 15);
}
function dospeech() {
  //varience's code
  if (delay == 1) {
    playSound(sound);
  } //speech sound
  if (delay > 0) {
    delay--;
  }
  else if (pos < msg.length) {
    pos++;
    delay = speed; // can be however many frames you want a timedLoop may also be possible
  }
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER); // optional
  text(msg.substring(0, pos), 314, 65); // where the substring method is called
}
function control() {
  if (speech == 39 && mode == -50 || speech == 39 && mode > 0) {
    mode = 0;
    atktime = 0;
    platform1.x = 2000;
    platform2.x = 2000;
    spikefloor.x = 2000;
    longwand.x = 2000;
    ftrand = -3;
    split.x = 2000;
    splitkill.x = 2000;
    warnsplit.x = 2000;
    sparkle.x = 2000;
    sparkle.velocityX = 0;
    sparkle.velocityY = 0;
    sprkwarn.x = 2000;
    hat.x = 2000;
    hatblast.x = 20000;
    ace1.x = 2000;
    ace2.x = 2000;
    ace3.x = 2000;
    ace4.x = 2000;
    wand1.velocityX = 0;
    wand2.velocityX = 0;
    wand1.x = 2000;
    wand2.x = 2000;
  }
  //items
  if (mode == -60) {
    soul.x = 500;
    fill("white");
    textSize(36);
    text("*", 30, 263);
    textSize(18);
    text(items[itemused].desc, 50, 250);
    if (itemused == 6 || itemused == 7) {
      enemy.setAnimation("Scott spooked");
    }
    if (keyWentDown("z") || keyWentDown("space") || keyWentDown("enter")) {
      doattack();
      enemy.setAnimation("Scott idle better");
    }
  }
  if (mode == -53) {
    (function () {
      for (var i = 0; i < items.length; i++) {
        if (!items[i].used) {
          return false;
        }
      }
      mode = 0;
      select = 3;
    })();
    fill("white");
    text("Page " + ipage, 330, 295);
    itemused = (ipage - 1) * 4 + select - 1;
    soul.x = 40 + 160 * (itemused % 2);
    soul.y = 245 + 35 * Math.floor((select - 1) / 2);
    if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
      if (!items[itemused].used) {
        php += items[itemused].heal
        items[itemused].used = true;
        mode = -60;
        ipage = 1;
        playSound("assets/ut-heal.mp3")
      }
      playSound("assets/ut-select.mp3")
    }
    textSize(20);
    for (var i = (ipage - 1) * 4; i < ipage * 4; i++) {
      if (!items[i].used) {
        fill(255);
        text(items[i].name, 50 + 160 * (i % 2), 250 + 35 * Math.floor(i / (4 * (ipage - 1) + 2)))
      } else {
        fill(100, 100, 100);
        text("Empty", 50 + 160 * (i % 2), 250 + 35 * Math.floor(i / (4 * (ipage - 1) + 2)))
      }
    }
    if (keyWentDown("shift") || keyWentDown("x")) {
      select = 3;
      ipage = 1;
      mode = 0;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("a") || keyWentDown("left")) {
      select -= 1;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("d") || keyWentDown("right")) {
      select += 1;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("w") || keyWentDown("up")) {
      select -= 2;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("s") || keyWentDown("down")) {
      select += 2;
      playSound("assets/ut-change-select.mp3");
    }
    if (ipage < 2 && select < 1) { mode = 0; select = 3; ipage = 1; return }
    ipage = (select < 1 || select > 4) ? ipage + ((ipage < 2) - (ipage > 1)) : ipage;
    select = select > 4 ? 1 : select < 1 ? 4 : select;
  }
  //check text
  if (mode == -51) {
    soul.x = 500;
    fill("white");
    textSize(36);
    text("*", 30, 263);
    textSize(18);
    speed = 2;
    sound = "assets/typewriter-click.mp3";
    msg = "Scott the Magician    " + evdmg + " ATK " + evdef + " DEF\nHere to do what's right for once";
    text(msg.substring(0, pos), 50, 250);
    if (delay == 1) {
      playSound(sound);
    } //speech sound
    if (delay > 0) {
      delay--;
    }
    else if (pos < msg.length) {
      pos++;
      delay = speed;
    }
    if (keyWentDown("z") || keyWentDown("space") || keyWentDown("enter")) {
      doattack();
    }
  }
  //fight text
  if (mode == -50) {
    sound = "assets/scott-speech-i.mp3";
    soul.x = 500;
    talkbox.visible = true;
    textSize(12);
    fill("black");
    noStroke();
    //spare text
    if (speech == -50) {
      msg = "Huh, you're\nactually sparing\nme?";
    }
    else if (speech == -49) {
      enemy.setAnimation("Scott sweat blink");
      speed = 4;
      msg = "...";
    }
    else if (speech == -48) {
      enemy.setAnimation("Scott sweat blink");
      speed = 2;
      msg = "I actually didn't\nexpect that from\nyou";
    }
    else if (speech == -47) {
      enemy.setAnimation("Scott sweat");
      msg = "But it seems\nlike you aren't\nthat bad after all";
    }
    else if (speech == -46) {
      msg = "Well partner,\nthere's no time\nto waste";
    }
    else if (speech == -45) {
      msg = "C'mon, let's go\nto my workshop";
    }
    else if (speech == -44) {
      mode = 1;
      soul.x = 200;
      soul.y = 260;
      atktime = 5000000;
    }
    //fight text
    dospeech();
    if (speech == 1) {
      msg = "Greetings.\nThe name's Scott \nthe Magician";
    }
    else if (speech == 2) {
      msg = "I know a lot\nabout you yknow";
    }
    else if (speech == 3) {
      msg = "I've heard about\nyou getting\ntransfered to the\nabyss";
    }
    else if (speech == 4) {
      enemy.setAnimation("Scott blink");
      msg = "I suppose you\ndidn't take it lightly";
    }
    else if (speech == 5) {
      msg = "Last time I\nchecked, the abyss\nwasn't this empty";
    }
    else if (speech == 6) {
      msg = "It had a few fellas\nlike obsoodles";
    }
    else if (speech == 7) {
      enemy.setAnimation("Scott sus");
      msg = "I sure wonder\nwhere they\ncould've gone";
    }
    else if (speech == 8) {
      enemy.setAnimation("Scott angry");
      msg = "Don't lie. You\nknow where\nthey went";
    }
    else if (speech == 9) {
      msg = "You know what\nhappens when a\nmarshmallow dies\ndon't you?";
    }
    else if (speech == 10) {
      speed = 4;
      enemy.setAnimation("Scott angry");
      msg = "Don't lie.";
    }
    else if (speech == 11) {
      enemy.setAnimation("Scott sus");
      speed = 8;
      msg = "They melt.";
    }
    else if (speech == 12) {
      speed = 2;
      msg = "And would ya\nlook at that";
    }
    else if (speech == 13) {
      speed = 5;
      enemy.setAnimation("Scott angry");
      msg = "Puddles of\nmarshmallow\nscattered\neverywhere";
    }
    else if (speech == 14) {
      speed = 2;
      msg = "You knew what\nyou were doing";
    }
    else if (speech == 15) {
      msg = "You didn't want to\ngo unused";
    }
    else if (speech == 16) {
      msg = "You didn't want to\nbe trapped down\nhere forever";
    }
    else if (speech == 17) {
      enemy.setAnimation("Scott angry");
      msg = "So you gained\npower";
    }
    else if (speech == 18) {
      msg = "Power to leave\nthis empty place";
    }
    else if (speech == 19) {
      enemy.setAnimation("Scott sweat blink");
      speed = 3;
      msg = "To... another...\nempty place...";
    }
    else if (speech == 20) {
      speed = 2;
      msg = "As long as it\nmeans to be in\nthe spotlight";
    }
    else if (speech == 21) {
      enemy.setAnimation("Scott sus");
      msg = "You'd do anything";
    }
    else if (speech == 22) {
      enemy.setAnimation("Scott angry");
      msg = "Including dwindling\ndown the choices";
    }
    else if (speech == 23) {
      enemy.setAnimation("Scott sus");
      msg = "Something quite\nsmart coming from\nyou actually";
    }
    else if (speech == 24) {
      enemy.setAnimation("Scott blink");
      msg = "All of that was\nyour thinking, yes?";
    }
    else if (speech == 25) {
      speed = 6;
      msg = "hm...";
    }
    else if (speech == 26) {
      stopSound(battlesong);
      speed = 2;
      msg = "Well then...\nI have a\nproposal";
    }
    else if (speech == 27) {
      if (pos == 1) {
        playSound("assets/ut-The-Choice.mp3", true);
      }
      msg = "You have certain\ntraits that I've\nbeen looking for";
    }
    else if (speech == 28) {
      msg = "The sheer amount\nof will and tenacity";
    }
    else if (speech == 29) {
      msg = "It could prove\nuseful";
    }
    else if (speech == 30) {
      msg = "You wanted to be\nin the spotlight,\ndidn't you?";
    }
    else if (speech == 31) {
      msg = "Well, here's your\nchance";
    }
    else if (speech == 32) {
      msg = "You can spare me,\nand we could do\njust about anything";
    }
    else if (speech == 33) {
      msg = "Your power in your\nsoul";
    }
    else if (speech == 34) {
      msg = "It will prove\nincreadibly useful";
    }
    else if (speech == 35) {
      msg = "I know it is one of\nthe most powerful\nthings out there";
    }
    else if (speech == 36) {
      msg = "It's nearly powerful\nenough to cross\nthe barrier between\nthe abyss";
    }
    else if (speech == 37) {
      msg = "and the void.";
    }
    else if (speech == 38) {
      msg = "So if you decide\nto join me.\nWe could be\nunstoppable";
    }
    else if (speech == 39) {
      msg = "sussy move";
    }
    else if (speech == 40) {
      phase = 2;
      stopSound("assets/ut-The-Choice.mp3");
      enemy.setAnimation("Scott blink");
      msg = "Hm. Alright\nWasn't expecting\nmuch from you\nanyway";
    }
    else if (speech == 41) {
      msg = "Very unfortunate\nthought you\nwanted to leave";
    }
    else if (speech == 42) {
      enemy.setAnimation("Scott shrug blink");
      msg = "But, I suppose\nya don't";
    }
    else if (speech == 43) {
      msg = "A lot of potential\nlost";
    }
    else if (speech == 44) {
      enemy.setAnimation("Scott shrug blink");
      msg = "But, oh well";
    }
    else if (speech == 45) {
      msg = "You wanna be a\nlone ranger don't\nya";
    }
    else if (speech == 46) {
      msg = "I suppose I\nget it.\nI usually prefer to\nbe alone";
    }
    else if (speech == 47) {
      enemy.setAnimation("Scott blink");
      msg = "But... you\njust passed up\nan amazing\noppertunity";
    }
    else if (speech == 48) {
      enemy.setAnimation("Scott sus");
      msg = "There are some\nthings I just won't\nunderstand\nI suppose";
    }
    else if (speech == 49) {
      enemy.setAnimation("Scott sus");
      msg = "All I can currently\ndo is stop you from\ndoing any further\nharm";
    }
    else if (speech == 50) {
      enemy.setAnimation("Scott blink");
      msg = "And that is exactly\nwhat I am doing\nright now";
    }
    else if (speech == 51) {
      msg = "But, despite what\nI've been doing...";
    }
    else if (speech == 52) {
      enemy.setAnimation("Scott sus");
      msg = "You're still\nbreathing";
    }
    else if (speech == 53) {
      enemy.setAnimation("Scott blink");
      msg = "And that is\nno bueno for\nanyone";
    }
    else if (speech == 54) {
      enemy.setAnimation("Scott blink");
      msg = "So if you could\nbe nice for once\nand just... stop";
    }
    else if (speech == 55) {
      enemy.setAnimation("Scott blink");
      msg = "That'd be nice";
    }
    else if (speech == 56) {
      enemy.setAnimation("Scott blink");
      speed = 6;
      msg = "...";
    }
    else if (speech == 57) {
      enemy.setAnimation("Scott blink");
      speed = 2;
      msg = "*sigh*";
    }
    else if (speech == 58) {
      enemy.setAnimation("Scott blink");
      msg = "Ok look buddy,\nI really don't\nhave much more\nto say";
    }
    else if (speech == 59) {
      enemy.setAnimation("Scott blink");
      msg = "And I don't\nhave much more\ntime to waste...";
    }
    else if (speech == 60) {
      msg = "I say we\njust move on.";
    }
    else if (speech == 61) {
      enemy.setAnimation("Scott blink");
      msg = "I can inform\nthe king that you\nwant attention";
    }
    else if (speech == 62) {
      msg = "And boom,\nusage.\neasy as that";
    }
    else if (speech == 63) {
      msg = "Time saved,\nLives saved";
    }
    else if (speech == 64) {
      phase = 3;
      enemy.setAnimation("Scott angry");
      msg = "No? Fine. I'll give\nyou random crap to\ndeal with then.";
    }
    //26 continues talking. change music to The Choice
    //40 go to phase 2
    //64 go to phase 3 (final attack)
    //65 is where he dies
    if (keyWentDown("z") || keyWentDown("space") || keyWentDown("enter")) {
      if (speech > -1 && speech < 26 || speech > 40) {
        doattack();
        soul.x = 200;
        soul.y = 260;
        enemy.setAnimation("Scott idle better");
      }
      else if (speech == 34) {
        playSound("assets/ut-The-Choice.mp3", true);
        speech += 1;
      }
      else if (speech == 38) {
        mode == 0;
        select = 2;
        speech += 1;
      }
      else if (speech == 40) {
        enemy.setAnimation("Scott idle better");
        playSound(battlesong, true);
        doattack();
        soul.x = 200;
        soul.y = 260;
      }
      else {
        pos = 0;
        speech += 1;
      }
    }
  }
  else {
    talkbox.visible = false;
  }
  if (mode == -2) {
    if (select == 1) {
      soul.x = 40;
      soul.y = 245;
      if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
        playSound("assets/ut-select.mp3");
        pos = 0;
        mode = -51;
      }
    }
    if (select == 2) {
      soul.x = 200;
      soul.y = 245;
    }
    if (select == 3) {
      soul.x = 40;
      soul.y = 280;
    }
    if (select == 4) {
      soul.x = 200;
      soul.y = 280;
      if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
        playSound("assets/ut-select.mp3");
        mode = 1;
        pos = 0;
        atktime = 0;
        select = 2;
      }
    }
    fill("white");
    textSize(20);
    text("Check", 50, 250);
    text(" ", 210, 250);
    text(" ", 50, 285);
    text("Back (mobile)", 210, 285);
    if (keyWentDown("shift") || keyWentDown("x")) {
      select = 2;
      mode = 0;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("a") || keyWentDown("left")) {
      select -= 1;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("d") || keyWentDown("right")) {
      select += 1;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("w") || keyWentDown("up")) {
      select -= 2;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("s") || keyWentDown("down")) {
      select += 2;
      playSound("assets/ut-change-select.mp3");
    }
    if (select == 5) {
      select = 1;
    }
    if (select == 6) {
      select = 2;
    }
    if (select == 0) {
      select = 4;
    }
    if (select == -1) {
      select = 3;
    }
    if (select > 6) {
      select = 1;
    }
    if (select < -1) {
      select = 4;
    }
  }
  //menu
  if (mode == 0) {
    if (select == 1) {
      pos = 0;
      fightbtn.setAnimation("FIGHT selected");
      actbtn.setAnimation("ACT");
      itembtn.setAnimation("ITEM");
      mercybtn.setAnimation("MERCY");
      if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
        playSound("assets/ut-select.mp3");
        playSound("assets/ut-attack-hit.mp3");
        speech += 1;
        mode = -50;
        ehp -= pdmg;
        ftrand = randomNumber(1, maxflav);
      }
      soul.x = fightbtn.x - 30;
      soul.y = 380;
    }
    if (select == 2) {
      fightbtn.setAnimation("FIGHT");
      actbtn.setAnimation("ACT selected");
      itembtn.setAnimation("ITEM");
      mercybtn.setAnimation("MERCY");
      if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
        playSound("assets/ut-select.mp3");
        mode = -2;
        select = 1;
      }
      soul.x = actbtn.x - 30;
      soul.y = 380;
    }
    if (select == 3) {
      fightbtn.setAnimation("FIGHT");
      actbtn.setAnimation("ACT");
      itembtn.setAnimation("ITEM selected");
      mercybtn.setAnimation("MERCY");
      if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
        playSound("assets/ut-select.mp3");
        mode = -53;
        select = 1;
      }
      soul.x = itembtn.x - 30;
      soul.y = 380;
    }
    if (select == 4) {
      fightbtn.setAnimation("FIGHT");
      actbtn.setAnimation("ACT");
      itembtn.setAnimation("ITEM");
      mercybtn.setAnimation("MERCY selected");
      if (keyWentDown("space") || keyWentDown("z") || keyWentDown("enter")) {
        playSound("assets/ut-select.mp3");
        if (speech == 39) {
          mode = -50;
          speech = -50;
          stopSound("assets/ut-The-Choice.mp3");
          pos = 0;
        }
      }
      soul.x = mercybtn.x - 30;
      soul.y = 380;
    }
    if (keyWentDown("a") || keyWentDown("left")) {
      select -= 1;
      playSound("assets/ut-change-select.mp3");
    }
    if (keyWentDown("d") || keyWentDown("right")) {
      select += 1;
      playSound("assets/ut-change-select.mp3");
    }
    if (select > 4) {
      select = 1;
    }
    if (select < 1) {
      select = 4;
    }
  }
  else {
    fightbtn.setAnimation("FIGHT");
    actbtn.setAnimation("ACT");
    itembtn.setAnimation("ITEM");
    mercybtn.setAnimation("MERCY");
  }
  if (mode > 0) {
    select = 1;
  }
  //red soul
  if (mode == 1) {
    soul.setAnimation("red soul small");
    if (keyDown("w") || keyDown("up")) {
      soul.y -= 1.5;
    }
    if (keyDown("s") || keyDown("down")) {
      soul.y += 1.5;
    }
    if (keyDown("a") || keyDown("left")) {
      soul.x -= 1.5;
    }
    if (keyDown("d") || keyDown("right")) {
      soul.x += 1.5;
    }
  }
  //blue soul
  if (mode == 2) {
    soul.setAnimation("blue soul");
    if (keyDown("w") && jumps > 0 || keyDown("up") && jumps > 0 || keyDown("space") && jumps > 0) {
      soul.velocityY = -5.75;
      jumps = 0;
    }
    if (keyDown("a") || keyDown("left")) {
      soul.x -= 1.5;
    }
    if (keyDown("d") || keyDown("right")) {
      soul.x += 1.5;
    }
    if (keyWentUp("w") && soul.velocityY < -0.05 || keyWentUp("up") && soul.velocityY < -0.05 || keyWentUp("space") && soul.velocityY < -0.05) {
      soul.velocityY = -0.05;
    }
    soul.velocityY += 0.25;
  }
  else {
    soul.velocityY = 0;
  }
} //includes speech
function hurt() {
  if (kractive == 1) {
    kr += Math.round(edmg * dmgmult);
    playSound("assets/ut-hurt.mp3");
  }
  else if (iframe <= 0) {
    playSound("assets/ut-hurt.mp3");
    php -= Math.round(edmg * dmgmult);
    iframe = 60;
  }
}
function lose() {
  if (pname == "graycat" || pname == "imdead") {
    if (mode != -5000) {
      php = 0;
    }
  }
  if (php == 0) {
    kr = 0;
    soul.x = 1200;
    soul.y = 220;
    camera.x = 1200;
    mode = -5000;
    stopSound();
    atktime = 180;
    atknow = -10;
    php = -1;
  }
  if (php == -1) {
    atktime -= 1;
    if (atktime > 150 && atktime < 152) {
      soul.setAnimation("red soul split");
      playSound("assets/ut-soul-split-and-shatter.mp3");
    }
    else if (atktime > 50 && atktime < 52) {
      soul.setAnimation("red soul shatter");
    }
    if (atktime > -80 && atktime < -78) {
      if (speech >= 0) {
        playSound("assets/Determination.mp3", true);
      }
      else {
        playSound("assets/ut-Dog-Song.mp3", true);
      }
    }
    if (atktime < -80) {
      fill("white");
      textSize(48);
      stroke("white");
      strokeWeight(2);
      text("GAME\nOVER", 1120, 80);
      textSize(24);
      noStroke();
      if (speech >= 0) {
        if (ftrand == 2) {
          text("It isn't over just yet " + pname + "!\nStay Determined!", 1080, 200);
        }
        else if (ftrand == 3) {
          text("Don't lose hope " + pname + "!\nStay Determined!", 1080, 200);
        }
        else if (ftrand == 4) {
          text("You can get through this " + pname + "!\nStay Determined!", 1080, 200);
        }
        else if (pname == "graycat") {
          text("nah man", 1144, 222);
        }
        else if (pname == "imdead") {
          text("Oops, looks like you found\nthe instant kill name", 1070, 200);
        }
        else if (ftrand == 1) {
          text("You can't give up yet " + pname + "!\nStay Determined!", 1080, 200);
        }
        else {
          text("Don't give up now " + pname + "!\nStay Determined!", 1080, 200);
        }
      }
      else {
        text("  Sorry bud, although it\n  would have been cool\nI just don't trust you at all", 1060, 200);
      }
      if (pname == "imdead") {
        fill("white");
        text("Refresh and try another name", 1050, 350);
      }
      else if (pname == "graycat") {
        fill("white");
        text("Press [R] to die again", 1090, 350);
        textSize(15);
        text("or press the orange button if you're on mobile", 1050, 380);
      }
      else {
        fill("white");
        text("Press [R] to try again", 1090, 350);
        textSize(15);
        text("or press the orange button if you're on mobile", 1050, 380);
      }
      //this is funny so instead of fixing it I made it a feature
      textSize(15);
      text("i guess im just gonna be\nfloating through the abyss", wand1.x + 15, wand1.y);
      textSize(24);
      text("AAAAHHHH!!", wand2.x + 15, wand2.y);
    }
  }
  if (mode != -5000 && php == -1) {
    php = 0;
  }
  if (php < -1) {
    php = -1;
  }
}
function restart() {
  stopSound();
  for (var i = 0; i < items.length; i++) {
    items[i].used = false;
  }
  enemy.setAnimation("Scott idle better");
  deaths += 1;
  hurtcolor = 0;
  playSound(battlesong, true);
  colorblast.x = 20000;
  colorhat.x = 20000;
  mode = 1;
  spikewand1.x = 2000;
  spikewand2.x = 2000;
  spikewand1.setSpeedAndDirection(0, 0);
  spikewand2.setSpeedAndDirection(0, 0);
  atktime = 0;
  split.x = 2000;
  select = 1;
  splitkill.x = 2000;
  warnsplit.x = 2000;
  sparkle.x = 2000;
  sparkle.velocityX = 0;
  sparkle.velocityY = 0;
  sprkwarn.x = 2000;
  hat.x = 2000;
  hat.rotation = 0;
  hat.rotationSpeed = 0;
  hat.setVelocity(0, 0);
  hatblast.x = 20000;
  ace1.x = 2000;
  ace2.x = 2000;
  ace3.x = 2000;
  ace4.x = 2000;
  wand1.velocityX = 0;
  wand2.velocityX = 0;
  wand1.x = 2000;
  wand2.x = 2000;
  php = phpmax;
  speech = 0;
  ftrand = 0;
  ehp = ehpmax;
  soul.setAnimation("red soul small");
  soul.y = 370;
  camera.x = 200;
}
//ATTACKS
var minatk = 1;
var maxatk = 6;
function phasechange() {
  if (phase == 1) {
    minatk = 1;
    maxatk = 6;
  }
  else if (phase == 2) {
    minatk = 7;
    maxatk = 10;
  }
  else if (phase == 3) {
    minatk = 15;
    maxatk = 15;
  }
}
function doattack() {
  atknow = randomNumber(minatk, maxatk);
  if (atknow == 1) { //split box
    mode = 1;
    atktime = 180;
    soul.x = 200;
    soul.y = 260;
  }
  else if (atknow == 2) { //magic sparkle
    ace1.x = 50;
    ace1.y = 260;
    ace2.x = 350;
    ace2.y = 260;
    ace3.x = 120;
    ace3.y = 260;
    ace4.x = 280;
    ace4.y = 260;
    sparkle.setCollider("rectangle", 0, 0, 32, 32, 0);
    mode = 1;
    atktime = 480;
    soul.x = 200;
    soul.y = 260;
  }
  else if (atknow == 3) { //hat blaster
    mode = 1;
    atktime = 480;
    soul.x = 200;
    soul.y = 260;
  }
  else if (atknow == 4) { //bouncy ball
    sparkle.setCollider("circle", 0, 0, 12);
    mode = 2;
    sparkle.x = 200;
    sparkle.y = 220;
    sparkle.velocityY = 1.5;
    sparkle.velocityX = -1.5;
    ace1.x = 50;
    ace1.y = 260;
    ace2.x = 350;
    ace2.y = 260;
    ace3.x = 120;
    ace3.y = 260;
    ace4.x = 280;
    ace4.y = 260;
    atktime = 480;
    soul.x = 200;
    soul.y = 290;
  }
  else if (atknow == 5) { //wand wall bounce
    ace1.x = 50;
    ace1.y = 260;
    ace2.x = 350;
    ace2.y = 260;
    mode = 2;
    atktime = 480;
    soul.x = 200;
    soul.y = 300;
    wand1.x = 150;
    wand2.x = 250;
    wand1.velocityX = -4;
    wand2.velocityX = 4;
  }
  else if (atknow == 6) { //platforms
    atktime = 900;
    mode = 2;
    soul.x = 200;
    soul.y = 290;
    longwand.x = 250;
    longwand.y = 260;
    longwand.rotation = 0;
    spikefloor.x = 200;
    spikefloor.y = 320;
    platform1.x = 350;
    platform1.velocityX = -1;
    platform2.x = 450;
    platform2.velocityX = -1;
  }
  else if (atknow == 7) { //hat blaster 2
    mode = 1;
    atktime = 480;
    soul.x = 200;
    soul.y = 260;
  }
  else if (atknow == 8) { //hat blaster spin
    ace1.x = 50;
    ace1.y = 260;
    ace2.x = 350;
    ace2.y = 260;
    mode = 1;
    atktime = 480;
    soul.x = 200;
    soul.y = 260;
    hat.x = 50;
    hat.y = 260;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  else if (atknow == 9) { //shadow hat color
    mode = 1;
    atktime = 240;
    soul.x = 200;
    soul.y = 260;
  }
  else if (atknow == 10) { //wand throw
    mode = 1;
    atktime = 420;
    soul.x = 200;
    soul.y = 260;
    ace1.x = 50;
    ace1.y = 260;
    ace2.x = 350;
    ace2.y = 260;
    spikewand1.x = 120;
    spikewand1.y = 260;
    spikewand2.x = 280;
    spikewand2.y = 260;
    spikewand1.setSpeedAndDirection(2, spikewand1.rotation);
    spikewand2.setSpeedAndDirection(2, spikewand1.rotation);
  }
  else if (atknow == 15) { //final attack
    mode = 1;
    atktime = 1800;
    soul.x = 200;
    soul.y = 260;
  }
}
function playattack() {
  atktime -= 1;
  if (atknow == 1) {
    splitbox();
  }
  else if (atknow == 2) {
    magicsparkle();
  }
  else if (atknow == 3) {
    hatblaster();
  }
  else if (atknow == 4) {
    bouncyball();
  }
  else if (atknow == 5) {
    wandwallbounce();
  }
  else if (atknow == 6) {
    platforms();
  }
  else if (atknow == 7) {
    hatblaster2();
  }
  else if (atknow == 8) {
    hatblasterspin();
  }
  else if (atknow == 9) {
    shadowcolor();
  }
  else if (atknow == 10) {
    wandthrow();
  }
  else if (atknow == 15) {
    laststand();
  }
}
//phase 1
function splitbox() {
  if (atktime > 180) {
    atktime = 180;
  }
  if (atktime > 120) {
    warnsplit.x = soul.x;
  }
  else if (atktime == 90) {
    split.x = warnsplit.x;
    splitkill.x = warnsplit.x;
    warnsplit.x = 2000;
    playSound("assets/ut-soul-split.mp3");
  }
}
function magicsparkle() {
  atktime -= 1;
  if (atktime == 478) {
    sparkle.x = 2000;
    sprkwarn.x = soul.x;
    sprkwarn.y = soul.y;
  }
  if (atktime == 420) {
    sparkle.setFrame(0);
    sparkle.play();
    sparkle.x = sprkwarn.x;
    sparkle.y = sprkwarn.y;
    sprkwarn.x = 2000;
  }
  if (atktime == 380) {
    sparkle.x = 2000;
    sprkwarn.x = soul.x;
    sprkwarn.y = soul.y;
  }
  if (atktime == 340) {
    sparkle.setFrame(0);
    sparkle.play();
    sparkle.x = sprkwarn.x;
    sparkle.y = sprkwarn.y;
    sprkwarn.x = 2000;
  }
  if (atktime == 300) {
    sparkle.x = 2000;
    sprkwarn.x = soul.x;
    sprkwarn.y = soul.y;
  }
  if (atktime == 260) {
    sparkle.setFrame(0);
    sparkle.play();
    sparkle.x = sprkwarn.x;
    sparkle.y = sprkwarn.y;
    sprkwarn.x = 2000;
  }
  if (atktime == 220) {
    sparkle.x = 2000;
    sprkwarn.x = soul.x;
    sprkwarn.y = soul.y;
  }
  if (atktime == 180) {
    sparkle.setFrame(0);
    sparkle.play();
    sparkle.x = sprkwarn.x;
    sparkle.y = sprkwarn.y;
    sprkwarn.x = 2000;
  }
  if (atktime == 140) {
    sparkle.x = 2000;
    sprkwarn.x = soul.x;
    sprkwarn.y = soul.y;
  }
  if (atktime == 100) {
    sparkle.setFrame(0);
    sparkle.play();
    sparkle.x = sprkwarn.x;
    sparkle.y = sprkwarn.y;
    sprkwarn.x = 2000;
  }
  if (atktime == 60) {
    sparkle.x = 2000;
    sprkwarn.x = soul.x;
    sprkwarn.y = soul.y;
  }
  if (atktime == 20) {
    sparkle.setFrame(0);
    sparkle.play();
    sparkle.x = sprkwarn.x;
    sparkle.y = sprkwarn.y;
    sprkwarn.x = 2000;
  }
}
function hatblaster() {
  if (atktime == 460) {
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 420) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 380) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 340) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 300) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 260) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 220) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 180) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 140) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 100) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 60) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 20) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
}
function bouncyball() {
  sparkle.setFrame(3);
  if (sparkle.collide(bottomwall)) {
    sparkle.velocityY = -1.5;
  }
  if (sparkle.collide(topwall)) {
    sparkle.velocityY = 1.5;
  }
  if (sparkle.collide(ace4)) {
    sparkle.velocityX = -1.5;
  }
  if (sparkle.collide(ace3)) {
    sparkle.velocityX = 1.5;
  }
}
function wandwallbounce() {
  if (wand1.collide(ace2)) {
    wand1.velocityX = -4;
  }
  else if (wand1.collide(ace1)) {
    wand1.velocityX = 4;
  }
  if (wand2.collide(ace2)) {
    wand2.velocityX = -4;
  }
  else if (wand2.collide(ace1)) {
    wand2.velocityX = 4;
  }
}
function platforms() {
  if (spikefloor.y > 290 && atktime > 300) {
    spikefloor.y -= 0.1;
  }
  else if (spikefloor.y < 310 && atktime < 110) {
    spikefloor.y += 0.5;
  }
  if (platform1.isTouching(leftwall)) {
    platform1.velocityX = 1;
  }
  else if (platform1.isTouching(rightwall)) {
    platform1.velocityX = -1;
  }
  else if (platform1.isTouching(platform2)) {
    platform1.velocityX *= -1;
    platform2.velocityX *= -1;
  }
  if (platform2.isTouching(leftwall)) {
    platform2.velocityX = 1;
  }
  else if (platform2.isTouching(rightwall)) {
    platform2.velocityX = -1;
  }
  if (atktime == 750) {
    longwand.velocityX = -1;
  }
  if (atktime == 630) {
    longwand.velocityX = 0;
    longwand.velocityY = -2;
  }
  if (atktime == 585) {
    longwand.velocityX = 0;
    longwand.velocityY = 0;
  }
  if (atktime == 555) {
    longwand.velocityX = 0;
    longwand.velocityY = 2;
  }
  if (atktime == 510) {
    longwand.velocityX = 1;
    longwand.velocityY = 0;
  }
  if (atktime == 370) {
    longwand.velocityX = 0;
    longwand.velocityY = -2;
  }
  if (atktime == 320) {
    longwand.velocityX = 0;
    longwand.velocityY = 0;
  }
  if (atktime == 250) {
    longwand.velocityX = -2;
    longwand.velocityY = -2;
    longwand.rotationSpeed = 5;
  }
  if (atktime == 700) {
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.x = 50;
    hat.y = 100;
    hat.rotation = 90;
  }
  if (atktime == 600) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.x = 50;
    hatblast.y = 100;
    hatblast.rotation = 90;
  }
  if (atktime == 550) {
    hatblast.x = 2000;
    hat.x = 2000;
  }
  if (atktime == 450) {
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.x = 350;
    hat.y = 100;
    hat.rotation = 90;
  }
  if (atktime == 350) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.x = 350;
    hatblast.y = 100;
    hatblast.rotation = 90;
  }
  if (atktime == 300) {
    hatblast.x = 2000;
    hat.x = 2000;
  }
  if (atktime == 150) {
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.x = 30;
    hat.y = 260;
    hat.rotation = 0;
  }
  if (atktime == 50) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.x = 30;
    hatblast.y = 260;
    hatblast.rotation = 0;
  }
  if (atktime == 1) {
    hatblast.x = 2000;
    hat.x = 2000;
  }
}
//phase 2
function hatblaster2() {
  if (atktime == 460) {
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 430) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 400) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 370) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 340) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 310) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 280) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 250) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 220) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 190) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 160) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 130) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 100) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 70) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
  if (atktime == 40) {
    hatblast.x = 999999;
    hat.x = random(50, 350);
    hat.y = random(50, 350);
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    hat.pointTo(soul.x, soul.y);
  }
  if (atktime == 10) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    hatblast.rotation = hat.rotation;
  }
}
function hatblasterspin() {
  if (atktime == 400) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    playSound("assets/ut-blaster-loop.mp3", true);
    hat.rotationSpeed = 0.9; //if velocity was 1, this would be 0.6
    hat.setVelocity(1.5, -1.5);
  }
  if (atktime < 400) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
    hatblast.rotation = hat.rotation;
  }
  if (hat.rotation >= 90 && hat.rotation < 180) {
    hat.setVelocity(1.5, 1.5);
  }
  if (hat.rotation >= 180 && hat.rotation < 270) {
    hat.setVelocity(-1.5, 1.5);
  }
  if (hat.rotation >= 270 && hat.rotation < 360) {
    hat.setVelocity(-1.5, -1.5);
  }
  if (atktime == 1) {
    stopSound("assets/ut-blaster-loop.mp3");
  }
}
function shadowcolor() {
  colorhat.y = soul.y;
  colorblast.y = colorhat.y;
  if (atktime > 238) {
    enemy.setAnimation("Scott shadow");
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
    colorhat.x = 20;
  }
  if (atktime == 210) {
    color1 = randomNumber(1, 2);
    if (color1 == 1) {
      enemy.setAnimation("Scott shadow orange");
    }
    else {
      enemy.setAnimation("Scott shadow blue");
    }
    playSound("assets/ut-ding.mp3");
  }
  if (atktime == 195) {
    enemy.setAnimation("Scott shadow");
  }
  if (atktime == 180) {
    color2 = randomNumber(1, 2);
    if (color2 == 1) {
      enemy.setAnimation("Scott shadow orange");
    }
    else {
      enemy.setAnimation("Scott shadow blue");
    }
    playSound("assets/ut-ding.mp3");
  }
  if (atktime == 165) {
    enemy.setAnimation("Scott shadow");
  }
  if (atktime == 150) {
    color3 = randomNumber(1, 2);
    if (color3 == 1) {
      enemy.setAnimation("Scott shadow orange");
    }
    else {
      enemy.setAnimation("Scott shadow blue");
    }
    playSound("assets/ut-ding.mp3");
  }
  if (atktime == 135) {
    enemy.setAnimation("Scott shadow");
  }
  if (atktime == 105) {
    enemy.setAnimation("Scott idle better");
  }
  if (atktime == 80) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    if (color1 == 1) {
      colorhat.tint = "#ffb400";
      colorblast.tint = "#ffb400";
      hurtcolor = 1;
    }
    else {
      colorhat.tint = "#0000ff";
      colorblast.tint = "#0000ff";
      hurtcolor = 2;
    }
    colorblast.x = colorhat.x;
  }
  if (atktime == 65) {
    colorhat.tint = "#ffffff";
    colorblast.x = 20000;
  }
  if (atktime == 50) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    if (color2 == 1) {
      colorhat.tint = "#ffb400";
      colorblast.tint = "#ffb400";
      hurtcolor = 1;
    }
    else {
      colorhat.tint = "#0000ff";
      colorblast.tint = "#0000ff";
      hurtcolor = 2;
    }
    colorblast.x = colorhat.x;
  }
  if (atktime == 35) {
    colorhat.tint = "#ffffff";
    colorblast.x = 20000;
  }
  if (atktime == 20) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    if (color3 == 1) {
      colorhat.tint = "#ffb400";
      colorblast.tint = "#ffb400";
      hurtcolor = 1;
    }
    else {
      colorhat.tint = "#0000ff";
      colorblast.tint = "#0000ff";
      hurtcolor = 2;
    }
    colorblast.x = colorhat.x;
  }
  if (atktime == 5) {
    colorhat.tint = "#ffffff";
    colorblast.x = 20000;
  }
}
function wandthrow() {
  if (spikewand1.collide(ace1) || spikewand1.collide(ace2) ||
    spikewand1.collide(bottomwall) || spikewand1.collide(topwall)) {
    spikewand1.pointTo(soul.x + random(-25, 25), soul.y + random(-25, 25));
    spikewand1.setSpeedAndDirection(1.8, spikewand1.rotation);
  }
  if (spikewand2.collide(ace1) || spikewand2.collide(ace2) ||
    spikewand2.collide(bottomwall) || spikewand2.collide(topwall)) {
    spikewand2.pointTo(soul.x + random(-25, 25), soul.y + random(-25, 25));
    spikewand2.setSpeedAndDirection(1.8, spikewand2.rotation);
  }
}
//final attack
function laststand() {
  sparkle.setFrame(3);
  if (sparkle.collide(bottomwall)) {
    sparkle.velocityY = -2;
  }
  if (sparkle.collide(topwall)) {
    sparkle.velocityY = 2;
  }
  if (sparkle.collide(rightwall)) {
    sparkle.velocityX = -2;
  }
  if (sparkle.collide(leftwall)) {
    sparkle.velocityX = 2;
  }
  if (spikewand1.collide(leftwall) || spikewand1.collide(rightwall) ||
    spikewand1.collide(bottomwall) || spikewand1.collide(topwall)) {
    spikewand1.pointTo(soul.x, soul.y);
    spikewand1.setSpeedAndDirection(1, spikewand1.rotation);
  }
  if (spikewand2.collide(leftwall) || spikewand2.collide(rightwall) ||
    spikewand2.collide(bottomwall) || spikewand2.collide(topwall)) {
    spikewand2.pointTo(soul.x, soul.y);
    spikewand2.setSpeedAndDirection(1, spikewand2.rotation);
  }
  if (hurtcolor == 1) {
    colorhat.tint = "#ffb400";
    colorblast.tint = "#ffb400";
  }
  else if (hurtcolor == 2) {
    colorhat.tint = "#0000ff";
    colorblast.tint = "#0000ff";
  }
  if (atktime == 1798) {
    colorhat.x = 50;
    colorhat.y = 260;
    hurtcolor = 2;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 1740) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
    playSound("assets/ut-blaster-loop.mp3", true);
    colorhat.rotationSpeed = 0.9;
  }
  if (atktime < 1740) {
    colorblast.x = colorhat.x;
    colorblast.y = colorhat.y;
    colorblast.rotation = colorhat.rotation;
  }
  if (colorhat.rotation >= 90 && colorhat.rotation < 180) {
    colorhat.setVelocity(1.5, 1.5);
  }
  if (colorhat.rotation >= 180 && colorhat.rotation < 270) {
    colorhat.setVelocity(-1.5, 1.5);
  }
  if (colorhat.rotation >= 270 && colorhat.rotation < 360) {
    colorhat.setVelocity(-1.5, -1.5);
  }
  if (colorhat.rotation >= 0 && colorhat.rotation < 90 && atktime < 1740) {
    colorhat.setVelocity(1.5, -1.5);
  }
  if (colorhat.rotation >= 359) {
    colorhat.rotation = 0;
  }
  if (atktime == 1500) {
    playSound("assets/ut-notice.mp3");
  }
  if (atktime == 1470) {
    playSound("assets/ut-ding.mp3");
    hurtcolor = 1;
  }
  if (atktime == 1200) {
    playSound("assets/ut-notice.mp3");
  }
  if (atktime == 1170) {
    playSound("assets/ut-ding.mp3");
    hurtcolor = 2;
    spikewand1.x = 50;
    spikewand2.x = 350;
    spikewand1.y = 260;
    spikewand2.y = 260;
    spikewand1.setVelocity(1.5, 0);
    spikewand2.setVelocity(1.5, 0);
  }
  if (atktime == 900) {
    playSound("assets/ut-notice.mp3");
    sprkwarn.x = 200;
    sprkwarn.y = 260;
  }
  if (atktime == 870) {
    playSound("assets/ut-ding.mp3");
    hurtcolor = 1;
    sparkle.setVelocity(2, 2);
    sprkwarn.x = 2000;
    sparkle.x = 200;
    sparkle.y = 260;
  }
  if (atktime == 650) {
    playSound("assets/ut-ding.mp3");
  }
  if (atktime == 635) {
    playSound("assets/ut-ding.mp3");
  }
  if (atktime == 620) {
    playSound("assets/ut-ding.mp3");
    stopSound("assets/ut-blaster-loop.mp3");
    colorhat.x = 2000;
  }
  if (atktime == 550) {
    hat.x = soul.x;
    hat.y = 180;
    hat.rotation = 90;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 525) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 500) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 475) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 450) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 425) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 400) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 375) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 350) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 325) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 300) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 275) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 250) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 225) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 200) {
    hat.x = soul.x;
    hat.y = 180;
    hatblast.x = 2000;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime == 175) {
    hatblast.y = hat.y;
    hatblast.x = hat.x;
    hatblast.rotation = hat.rotation;
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime == 150) {
    hat.rotation = 0;
    hatblast.rotation = 0;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime < 150 && atktime > 125) {
    hat.x = 50;
    hat.y = soul.y;
    hatblast.x = 2000;
  }
  if (atktime == 100) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime < 100 && atktime > 75) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
  }
  if (atktime == 150) {
    hat.rotation = 0;
    hatblast.rotation = 0;
    playSound("assets/ut-Gaster-Blaster-charge.mp3");
  }
  if (atktime < 75 && atktime > 50) {
    hat.x = 50;
    hat.y = soul.y;
    hatblast.x = 2000;
  }
  if (atktime == 25) {
    playSound("assets/ut-Gaster-Blaster-shoot.mp3");
  }
  if (atktime < 25 && atktime > 0) {
    hatblast.x = hat.x;
    hatblast.y = hat.y;
  }
  if (atktime == 1) {
    stopSound(battlesong);
    enemy.setAnimation("Scott spooked");
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
