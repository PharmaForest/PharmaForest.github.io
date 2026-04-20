  // 右パネルに出す内容
  const items = {
    pharmaforest: {
      title: "PharmaForest",
      img: "./logo/pharmaforest.png",
      desc: 
      `
      A collaborative repository of SAS packages for pharmaceutical industry, started by PHUSE Japan OST (Open Source Technology) WG members—Hiroki Yamanobe, Yutaka Morioka, and Ryo Nakaya—showcasing the list of available packages. 

      <br><br> PharmaForest is built on top of SAS Packages Framework(SPF), which was developed by Bartosz Jablonski. There are more packages in his repository SAS Packages Archive(SASPAC).<br><br>
      `,
      badges: ["SAS Packages","Repository","Open-Source","MIT/Apache-2.0"],
      links: [{text:"PharmaForest", href:"https://github.com/PharmaForest"}, {text:"SPF", href:"https://github.com/yabwon/SAS_PACKAGES"},{text:"SASPAC", href:"https://github.com/SASPAC"}]
    },
    forester: {
      title: "Foresters (Contributors)",
      img: "./logo/squirrel.png",
      desc: 
      `
      Kudos to all contributors who have enriched the PharmaForest repository with their valuable contributions! Your efforts in developing, maintaining, and enhancing these packages are greatly appreciated and play a crucial role in advancing the SAS programming community within the pharmaceutical industry!<br><br>

      Bartosz Jablonski : Developer of SAS Packages Framework (SPF) and SAS Packages Archive (SASPAC).<br><br>

      Hiroki Yamanobe   : Co-founder and administrator of PharmaForest<br>
      Yutaka Morioka    : Co-founder and administrator of PharmaForest<br>
      Ryo Nakaya        : Co-founder and administrator of PharmaForest<br>
      Sharad Chhetri    : Project member of PharmaForest<br><br>

      Miyuki Aso        : devil(%sudoku_solver)<br>
      Akira Matsuzawa   : devil(%hanabi)<br>
      Teruko Narusawa   : RWDExpress<br>
      Shingo Suzuki and SAS Japan folks : SASToolbox<br>
      Rika Sakai        : test of Oncoplotter<br>
      Saikrishnareddy Yengannagari : sas_dataset_toon, defensivechk, GetCDISCCodelist, misc<br>
      Yoshiki Tokuda    : SAShighlight<br>
      Ken Nakamatsu     : SASDoGs, spf-skills<br>
      `,
      badges: ["SAS Packages","Repository","Open-Source"],
      links: [{text:"PharmaForest", href:"https://github.com/PharmaForest"}, {text:"SPF", href:"https://github.com/yabwon/SAS_PACKAGES"},{text:"SASPAC", href:"https://github.com/SASPAC"}]
    },
    oncoplotter: {
      title: "OncoPlotter",
      img: "./logo/oncoplotter.png",
      summary: "A SAS package to create figures commonly created in oncology studies.",
      license: "MIT",
      authors: ["PharmaForest"],
      maintainers: ["PharmaForest"],
      features: ["Kaplan-Meier Plot", "Swimmer Plot", "Waterfall Plot"],
      macros: ["%kaplan_meier_plot()","<br>%swimmer_plot()","<br>%waterfall_plot()", "<br>%forest_plot()", "<br>%spider_plot()"],
      badges: ["PharmaForest Original","Oncology","Output/Visualization","MIT"],
      links: [{text:"OncoPlotter", href:"https://github.com/PharmaForest/OncoPlotter"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sashash: {
      title: "SAS Hash",
      img: "./logo/sashash.png",
      summary: "Sashash package provides powerful and efficient hash-based lookup and validation tools specifically designed for SAS programming. Leveraging the robust capabilities of SAS hash objects, this package enables rapid and dynamic key-based data retrieval and existence checking directly within a single data step. This significantly reduces the need for separate sort and merge steps, streamlining workflows and enhancing performance.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["hash object"],
      macros: ["%kvlookup()","<br>%keycheck()","<br>%kduppchk()"],
      badges: ["hash","Data Utility","MIT"],
      links: [{text:"sashash", href:"https://github.com/PharmaForest/sashash"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sas_dataset_json: {
      title: "SAS Dataset JSON",
      img: "./logo/sas_dataset_json.png",
      summary: "Sas_dataset_json is a SAS macro package designed to support bi-directional conversion between CDISC-compliant Dataset-JSON format and SAS datasets.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Dataset JSON"],
      macros: ["%m_sas_to_json1_1()","<br>%m_json1_1_to_sas()","<br>%m_sas_to_ndjson1_1()","<br>%m_ndjson1_1_to_sas()"],
      badges: ["Dataset JSON","Data Utility","MIT"],
      links: [{text:"sas_dataset_json", href:"https://github.com/PharmaForest/sas_dataset_json"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    saspacer: {
      title: "SASPACer",
      img: "./logo/saspacer.png",
      summary: "A SAS package to help creating SAS packages. サスパッカー in the logo stands for SASPACer in Japanese. The package is to help creating SAS packages. Shaping onigiri(rice ball) by hands can be a bit challenging for beginners, but using onigiri mold makes it easy to form and provides a great introduction. Hope the mold(SASPACer) will help you to create your SAS package.",
      license: "MIT",
      authors: ["Ryo Nakaya"],
      maintainers: ["Ryo Nakaya"],
      features: ["SAS Packages"],
      macros: ["%ex2pac()","<br>%pac2ex()"],
      badges: ["SAS Packages","Other","MIT"],
      links: [{text:"SASPACer", href:"https://github.com/PharmaForest/SASPACer"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    misc: {
      title: "misc",
      img: "./logo/misc.png",
      summary: "A SAS package to place miscellaneous macros, functions, etc..",
      license: "MIT",
      authors: ["PharmaForest"],
      maintainers: ["PharmaForest"],
      features: ["Miscellaneous Functions"],
      macros: ["%xpt2sas()","<br>%minimize_charlen()","<br>%roundsig()","<br>%rounddec()","<br>%color_swatch()",
      "<br>swapn() routine","<br>swapc() routine","<br>swapn_vec() routine","<br>swapc_vec() routine",
      "<br>%view_swatch(), <br>%line_swatch(), <br>%symbol_swatch(), <br>%derive_epoch()"],
      badges: ["PharmaForest Original","Miscellaneous","Other","MIT"],
      links: [{text:"misc", href:"https://github.com/PharmaForest/misc"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sas_faker: {
      title: "SAS_FAKER",
      img: "./logo/sas_faker.png",
      summary: "SAS package to create dummy data in CDISC format for clinical trials Purpose: A macro to generate dummy clinical trial data. Creates datasets in SDTM (DM, AE, SV, VS) and ADaM (ADSL, ADAE，ADVS, ADTTE) formats. Generates pseudo subject data, vital signs, study visits, and adverse events based on user-specified group numbers and sample sizes.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Dummy Data"],
      macros: ["%sas_faker()"],
      badges: ["Dummy Data","Data Utility","MIT"],
      links: [{text:"sas_faker", href:"https://github.com/PharmaForest/sas_faker"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    saslogchecker: {
      title: "SAS log checker",
      img: "./logo/saslogchecker.png",
      summary: "SAS log checker for extracting ERRORs, WARNINGs, and notable NOTEs — supports interactive and directory-wide runs.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Log Checking"],
      macros: ["%interact_logchk()", "<br>%logchk2directory()"],
      badges: ["Log","Checker","MIT"],
      links: [{text:"saslogchecker", href:"https://github.com/PharmaForest/saslogchecker"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sas_compare: {
      title: "SAS Compare",
      img: "./logo/sas_compare.png",
      summary: "Package to compare SDTM/ADaM, TLF datasets, etc. Assume a double program in the pharmaceutical industry to compare main and sub.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Compare and results checking"],
      macros: ["%ads_compare()"],
      badges: ["Compare","Checker","MIT"],
      links: [{text:"sas_compare", href:"https://github.com/PharmaForest/sas_compare"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    rtfcreator: {
      title: "RTF Creator",
      img: "./logo/rtfcreator.png",
      summary: "A Package that allows you to easily create RTF files from your dataset.",
      license: "MIT",
      authors: ["Hiroki Yamanobe"],
      maintainers: ["Hiroki Yamanobe"],
      features: ["rtf tables creation"],
      macros: ["%rtfcreator()"],
      badges: ["rtf","ODSTable","Output/Visualization","MIT"],
      links: [{text:"rtfcreator", href:"https://github.com/PharmaForest/rtfcreator"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    shutter_chance: {
      title: "Shutter_chance",
      img: "./logo/shutter_chance.png",
      summary: "SHUTTER_CHANCE: Visual Checkpoints for SAS Data Step Review. MACRO_VARIABLE_SHUTTER_CHANCE: Visually check the global and local status and values of SAS macro variables at any point.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Snapshot in Data step/Macro"],
      macros: ["%shutter_chance()", "<br>%macro_variable_shutter_chance()"],
      badges: ["checkpoint","scope","Checker","MIT"],
      links: [{text:"shutter_chance", href:"https://github.com/PharmaForest/shutter_chance"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    devil: {
      title: "Developer's Ideas Library(DEVIL)",
      img: "./logo/devil.png",
      summary: "Welcome to Developer's Ideas Library. Share your devils (any ideas at any stage) for trial, inspiring, showing-off, recruiting members for further development by showing POC, or even joking(for fun). You can see in description.sas of devil package that author is Any Developers. Devil package is completely different from the other packages in PharmaForest with its highly collaborative nature to welcome any ideas from anyone regardless of usefulness(we would rather prefer playful ones😁). Let's take a break, knock the door of devil!",
      license: "MIT",
      authors: ["Any Developers"],
      maintainers: ["PharmaForest"],
      features: ["Collaborative and open library"],
      macros: ["%chatDMS() (Ryo Nakaya)", "<br>text2morse() (Yutaka Morioka)", "<br>%life_game() (Yutaka Morioka)","<br>%sudoku_solver() (Miyuki Aso)","<br>%hanabi() (Akira Matsuzawa, Yutaka Morioka, Ryo Nakaya)"],
      badges: ["PharmaForest Original","devil","collaborative","400 years","Other","MIT"],
      links: [{text:"devil", href:"https://github.com/PharmaForest/devil"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    xattr_kit: {
      title: "xattr_kit",
      img: "./logo/xattr_kit.png",
      summary: "xattr_kit is a package to simplify the management of SAS extended attributes",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Extended attributes management"],
      macros: ["%xattr_set_var()", "<br>%xattr_set_ds()", "<br>%list_xattr()", "<br>%xattr_in()", "<br>%xattr2macrovar()"],
      badges: ["extended attributes","Data Utility","MIT"],
      links: [{text:"xattr_kit", href:"https://github.com/PharmaForest/xattr_kit"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    cloak: {
      title: "Cloak",
      img: "./logo/cloak.png",
      summary: "A simple FCMP-based check-in/check-out storage system using dictionary objects in SAS. Store and retrieve data by key, like a digital cloakroom.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["FCMP functions"],
      macros: ["cloak_num()", "<br>cloak_char(), <br>%queue_init(), <br>%enqueue(), <br>%dequeue(), <br>%queue_peek(), <br>%stack_init(), <br>%stack_push(), <br>%stack_pop(), <br>%stack_peek()"],
      badges: ["check-in/check-out","Data Utility","MIT"],
      links: [{text:"cloak", href:"https://github.com/PharmaForest/cloak"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    vis_review_kit: {
      title: "Vis_Review_Kit",
      img: "./logo/vis_review_kit.png",
      summary: "Visual tools for reviewing and monitoring clinical trial data. A SAS macro package to support QC and exploration through graphical representations.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Visual Review"],
      macros: ["%event_gant_excel()", "<br>%upset_plot()"],
      badges: ["Visual review","Output/Visualization","MIT"],
      links: [{text:"vis_review_kit", href:"https://github.com/PharmaForest/vis_review_kit"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    odstable_layoutshowcase: {
      title: "odstable_layoutshowcase",
      img: "./logo/odstable_layoutshowcase.png",
      summary: "A SAS macro toolkit to showcase layout patterns using PROC ODSTABLE. Provides reusable examples of table design with multi-level headers, conditional formatting, composite layouts, and auto-generated RTF output. Ideal for clinical reporting, style template development, and training use.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Showcase of odstable layout"],
      macros: ["%odstable_layoutshowcase()"],
      badges: ["ODSTable","Output/Visualization","MIT"],
      links: [{text:"odstable_layoutshowcase", href:"https://github.com/PharmaForest/odstable_layoutshowcase"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    maxims4sas: {
      title: "maxims4sas",
      img: "./logo/maxims4sas.png",
      summary: "This package displays maxims that have deeply impressed me and that I wish to pass on to future generations.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Output maxims for SAS programmers"],
      macros: ["%sas_maxims()"],
      badges: ["maxims","Other","MIT"],
      links: [{text:"maxims4sas", href:"https://github.com/PharmaForest/maxims4sas"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    laglead: {
      title: "LAGLEAD",
      img: "./logo/laglead.png",
      summary: "SAS utilities for dynamic lead/lag value access.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["lead", "lag"],
      macros: ["%laglead()"],
      badges: ["lag","lead","Data Utility","MIT"],
      links: [{text:"laglead", href:"https://github.com/PharmaForest/laglead"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    ctcae5_grader: {
      title: "CTCAE5_grader",
      img: "./logo/ctcae5_grader.png",
      summary: "ctcae5_grader is a SAS macro package that automates the grading of laboratory tests according to CTCAE v5.0. It standardises grading rules for common laboratory parameters (e.g. haematology, biochemistry, electrolytes) and provides character and numeric grade outputs.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["CTCAE", "Grading"],
      macros: ["%CTCAE_XXX() [e.g. %CTCAE_ALT()]"],
      badges: ["CTCAE","grading","Data Utility","MIT"],
      links: [{text:"ctcae5_grader", href:"https://github.com/PharmaForest/ctcae5_grader"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    love_matrix: {
      title: "Love_Matrix",
      img: "./logo/love_matrix.png",
      summary: "Love_Matrix is a SAS macro toolkit for basic matrix operations (multiply, inverse, determinant, Cholesky, etc.) — works with PROC FCMP, no SAS/IML required.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["matrix", "operations"],
      macros: ["%matrix_mult(), <br>%matrix_inverse(), <br>%matrix_identity(), <br>%matrix_determinant(), <br>%matrix_transpose(), <br>%matrix_cholesky_decomposition()"],
      badges: ["matrix","love","Data Utility","MIT"],
      links: [{text:"love_matrix", href:"https://github.com/PharmaForest/love_matrix"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    SASPACerShiny: {
      title: "SASPACerShiny",
      img: "./logo/SASPACerShiny.png",
      summary: "サスパッカー in the logo stands for SASPACer in Japanese. Original SASPACer is a SAS package to support creating SAS packages. SASPACer Shiny is an R shiny application with the same purpose. By providing GUI interface, SASPACer Shiny supports R users to create SAS packages. Once SAS package source folder/file structure is done by SASPACer Shiny, users should run %generatePackage() in SAS Package Framework(SPF) using SAS to complete creating SAS packages. By the way, original SASPACer is suite tool until completion of creating SAS packages.",
      license: "MIT",
      authors: ["Ryo Nakaya"],
      maintainers: ["Ryo Nakaya"],
      features: ["SAS Packages"],
      macros: ["Not Applicable (SASPACerShiny::run_app())"],
      badges: ["SAS Packages","R", "Shiny", "Other","MIT"],
      links: [{text:"SASPACerShiny", href:"https://github.com/PharmaForest/SASPACerShiny"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    change_tracer_dog: {
      title: "Change Tracer Dog",
      img: "./logo/change_tracer_dog.png",
      summary: "Change Tracer Dog is a SAS macro package that behaves like a police dog: tracing dataset changes, sniffing out differences, and stopping patrol when the mission is complete.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Tracing dataset changes"],
      macros: ["%dog_patrol(), <br>%sniffer_compare(), <br>%patrol_end(), <br>%dog_chatter()"],
      badges: ["tracer","datasets", "change", "dog", "Checker","MIT"],
      links: [{text:"change_tracer_dog", href:"https://github.com/PharmaForest/change_tracer_dog"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    yaml_writer: {
      title: "YAML Writer",
      img: "./logo/yaml_writer.png",
      summary: "A lightweight SAS macro package to generate YAML files directly from SAS. It lets you: - Start and end YAML output streams, - Export datasets into YAML (mapping, sequence, mappingsequence), - Build nested or inline structures. Write YAML directly between %yaml_start and %yaml_end, use &nw. for line breaks, and %dataset_export / %nest / %inline_nest for structured output.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["writing YAML"],
      macros: ["%yaml_start(), <br>%yaml_end(), <br>%dataset_export(), <br>%nest(), <br>%inline_nest()"],
      badges: ["yaml", "Other","MIT"],
      links: [{text:"yaml_writer", href:"https://github.com/PharmaForest/yaml_writer"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    adamski: {
      title: "Adamski",
      img: "./logo/adamski.png",
      summary: "The adamski package is currently under development to support ADaM creation. Let's build the spaceship [adamski] together! 🛰️ Inspired by the admiral package in R, adamski aims to bring similar functionality — along with original functions and macros — to the SAS environment. We are looking for collaborators and contributors to join us on this exciting journey. If you’re passionate about ADaM programming or want to help shape tools for the clinical data community, we’d love to have you onboard! 🚀",
      license: "Apache-2.0",
      authors: ["PharmaForest"],
      maintainers: ["PharmaForest"],
      features: ["creating CDISC ADaM"],
      macros: ["%derive_vars_dy(), <br>%derive_var_merged_exist_flag(), <br>%derive_var_age_years(), <br>%derive_locf_records(), <br>%derive_var_base(), <br>%derive_var_chg(), <br>%derive_var_obs_number(), <br>%derive_vars_aage(), <br>%derive_vars_joined()"],
      badges: ["ADaM", "Data Utility","Apache-2.0"],
      links: [{text:"Adamski", href:"https://github.com/PharmaForest/adamski"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    RWDExpress: {
      title: "RWDExpress",
      img: "./logo/RWDExpress.png",
      summary: "RWD Express — a SAS package designed to accelerate your Real World Data journey. It helps you prepare your SAS environment for efficient RWD processing. Provides practical tools to handle, clean, and organize large, complex datasets.",
      license: "MIT",
      authors: ["Narusawa-T"],
      maintainers: ["Narusawa-T"],
      features: ["Handling RWD(big data)"],
      macros: ["%index_single_key(), <br>%small_world(), <br>%split_world()"],
      badges: ["RWD", "Big Data", "Data Utility","MIT"],
      links: [{text:"RWDExpress", href:"https://github.com/PharmaForest/RWDExpress"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    freqsum: {
      title: "freqsum",
      img: "./logo/freqsum.png",
      summary: "This package allows you to easily perform frequency tabulations and summary statistics.",
      license: "MIT",
      authors: ["Hiroki Yamanobe"],
      maintainers: ["Hiroki Yamanobe"],
      features: ["Frequency tabulations", "Summary statistics"],
      macros: ["%freqStat(), <br>%summaryStat()"],
      badges: ["Frequency","Summary","Output/Visualization","MIT"],
      links: [{text:"freqsum", href:"https://github.com/PharmaForest/freqsum"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    qc_cat_referee: {
      title: "QC_Cat_Referee",
      img: "./logo/qc_cat_referee.png",
      summary: "A SAS macro toolkit for automated data quality control. Applies integrity constraints to judge datasets (OK/NG) and outputs clear, visual QC results — with a cat referee making the call.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["QC", "Integrity constraints"],
      macros: ["%cat_rule_judgment(),<br>%cat_unique_judgment(),<br>%cat_unique_not_missing_judgment()"],
      badges: ["QC","Constraints","Checker","MIT"],
      links: [{text:"qc_cat_referee", href:"https://github.com/PharmaForest/qc_cat_referee"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    SASToolbox: {
      title: "SASToolbox",
      img: "./logo/SASToolbox.png",
      summary: "A SAS macros tool box which contains utility macros to handle files, datasets, and codes all at once.",
      license: "MIT",
      authors: ["Shingo Suzuki"],
      maintainers: ["Shingo Suzuki"],
      features: ["Tools", "handling all at once"],
      macros: ["%trancd2u8_d(),<br>%Read_csv_in_folder(),<br>%Read_excel_in_folder(),<br>%includeAll()"],
      badges: ["encoding","files","Data Utility","MIT"],
      links: [{text:"SASToolbox", href:"https://github.com/PharmaForest/SASToolbox"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    trial_flow: {
      title: "trial_flow",
      img: "./logo/trial_flow.png",
      summary: "A SAS macro package for creating flow diagrams, including CONSORT diagrams, with boxes, lines, and plots for clinical trial workflows.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["trial flow", "diagrams"],
      macros: ["%diagram_box(),<br>%diagram_line(),<br>%diagram_plot()"],
      badges: ["trial flow diagrams","Output/Visualization","MIT"],
      links: [{text:"trial_flow", href:"https://github.com/PharmaForest/trial_flow"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    valivali: {
      title: "valivali",
      img: "./logo/valivali.png",
      summary: "Valivali is a validation toolbox that provides utilities to test and validate SAS packages. Use it during package creation and verification to ensure expected behavior and reproducible results. Valivali loads {sasjscore} package developed by Allan Bowe when valivali is loaded and strongly influenced and powered by sasjscore. You need to install {sasjscore} to use the package. By loading valivali, users can utilize valivali original macros in addition to {sasjscore} macros for validation. BTW, `valivali` means bad boy's vibes in Japanese😁",
      license: "MIT",
      authors: ["PharmaForest"],
      maintainers: ["PharmaForest"],
      features: ["validation", "assertion"],
      macros: ["%mp_assertdataset(),<br>%mp_assertgraph(),<br>other macros in {sasjscore}, <br>%set_tmp_lib(), <br>%create_report()"],
      badges: ["validation","Checker","MIT"],
      links: [{text:"valivali", href:"https://github.com/PharmaForest/valivali"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    mergex: {
      title: "mergex",
      img: "./logo/mergex.png",
      summary: "MERGEX is a package that enables non-standard or unconventional joins not easily handled or supported by standard SAS syntax. It currently implements variable-name conflict-safe joins, and will support rolling joins and other advanced join types in future releases.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["merge", "non-standard joins"],
      macros: ["%varconf_merge(), <br>%rolling_match()"],
      badges: ["merge/join","Data Utility","MIT"],
      links: [{text:"mergex", href:"https://github.com/PharmaForest/mergex"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    basketMiningKit: {
      title: "basketMiningKit",
      img: "./logo/basketMiningKit.png",
      summary: "BasketMiningKit is a package that Perform association analysis using only Base SAS functionality, without using Enterprise Miner or SAS Viya.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Association analysis"],
      macros: ["%association_rule_mining()"],
      badges: ["Association analysis","Output/Visualization","MIT"],
      links: [{text:"basketMiningKit", href:"https://github.com/PharmaForest/basketMiningKit"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    datacut_sas: {
      title: "datacut_sas",
      img: "./logo/datacut_sas.png",
      summary: "Datacut_SAS is a set of SAS macros to prepare SDTM for data-cut analyses: remove post-cutoff records, overwrite with the cutoff date/time, drop subjects, and null flags. Supports multiple cutoff operations and generates an Excel report summarizing all applied changes.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Data-cut"],
      macros: ["%cutoff_setting(), <br>%cutoff_overwrite(), <br>%cutoff_delete(),<br>%cutoff_missing(),<br>%delete_participants(), <br>%output_and_report()"],
      badges: ["Data-cut","SDTM","raw data","Data Utility","MIT"],
      links: [{text:"datacut_sas", href:"https://github.com/PharmaForest/datacut_sas"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    retro_spell_check: {
      title: "retro_spell_check",
      img: "./logo/retro_spell_check.png",
      summary: "Batch spell verification for all files in a target folder. For each file, runs PROC SPELL with optional custom dictionary, writes the spell output to a per-file .txt, aggregates results, and exports a review-friendly Excel report.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Spell Check"],
      macros: ["%retro_spell_check()"],
      badges: ["Spell check","Batch","Checker","MIT"],
      links: [{text:"retro_spell_check", href:"https://github.com/PharmaForest/retro_spell_check"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sas_dataset_toon: {
      title: "sas_dataset_toon",
      img: "./logo/sas_dataset_toon.png",
      summary: "This package contains SAS macros for converting between SAS datasets and TOON (Token-Oriented Object Notation) format. This repository is an adapted version of Saikrishnareddy Yengannagari’s original package (https://github.com/kusy2009/sas_dataset_toon) tailored for the SAS Package Framework, and the original license remains the property of Saikrishnareddy Yengannagari.",
      license: "MIT",
      authors: ["Saikrishnareddy Yengannagari"],
      maintainers: ["Saikrishnareddy Yengannagari","Yutaka Morioka"],
      features: ["TOON generation"],
      macros: ["%sas2toon(), <br>%toon2sas()"],
      badges: ["TOON","Converter","Data Utility","MIT"],
      links: [{text:"sas_dataset_toon", href:"https://github.com/PharmaForest/sas_dataset_toon"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    defensivechk: {
      title: "defensivechk",
      img: "./logo/defensivechk.png",
      summary: "This repository contains a SAS macro designed to perform defensive checks on macro parameters, datasets, and variables. It ensures that the necessary items are defined before further data processing, and if any required items are missing or incorrect, it will provide error messages and can abort execution. This repository is an adapted version of Saikrishnareddy Yengannagari’s original package (https://github.com/kusy2009/defensivechk) tailored for the SAS Package Framework, and the original license remains the property of Saikrishnareddy Yengannagari.",
      license: "MIT",
      authors: ["Saikrishnareddy Yengannagari"],
      maintainers: ["Saikrishnareddy Yengannagari","Yutaka Morioka"],
      features: ["defensive checks"],
      macros: ["%defensivechk()"],
      badges: ["Defensive Checks","macro","Checker","MIT"],
      links: [{text:"defensivechk", href:"https://github.com/PharmaForest/defensivechk"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    GetCDISCCodelist: {
      title: "GetCDISCCodelist",
      img: "./logo/GetCDISCCodelist.png",
      summary: "This SAS macro retrieves and filters CDISC Controlled Terminology (CT) codelists for various CDISC standards (SDTM, ADaM, CDASH, etc.). The macro interacts with the CDISC Terminology API to fetch the latest terminology version and filters the codelists based on the specified input parameters. This repository is an adapted version of Saikrishnareddy Yengannagari’s original package (https://github.com/kusy2009/getCDISCCOdelist) tailored for the SAS Package Framework, and the original license remains the property of Saikrishnareddy Yengannagari.",
      license: "MIT",
      authors: ["Saikrishnareddy Yengannagari"],
      maintainers: ["Saikrishnareddy Yengannagari","Yutaka Morioka"],
      features: ["CDISC", "Codelists"],
      macros: ["%GetCDISCCodelist()"],
      badges: ["CDISC","Codelists","fetch","Other","MIT"],
      links: [{text:"GetCDISCCodelist", href:"https://github.com/PharmaForest/GetCDISCCodelist"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    kpi_viz_toolbox: {
      title: "kpi_viz_toolbox",
      img: "./logo/kpi_viz_toolbox.png",
      summary: "KPI visualization macros for tracking and reporting SDTM/ADaM/TLF programming progress, including counts and proportion-based indicators for delivery status.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["KPI Visualization"],
      macros: ["%number_kpi(), <br>%proportion_kpi()"],
      badges: ["KPI","proc GKPI","Output/Visualization","MIT"],
      links: [{text:"kpi_viz_toolbox", href:"https://github.com/PharmaForest/kpi_viz_toolbox"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    outlier_screening: {
      title: "outlier_screening",
      img: "./logo/outlier_screening.png",
      summary: "outlier_screening is a SAS macro toolkit for fast, review-friendly outlier detection. It flags extremes using SD (Z-score), MAD (robust Z), and IQR rules, adds ranks, and generates an annotated boxscatter plot for quick data screening.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Outlier Detection"],
      macros: ["%outlier_sd(), <br>%outlier_mad(), <br>%outlier_iqr(), <br>%outlier_all3()"],
      badges: ["Outlier","Screening","Checker","MIT"],
      links: [{text:"outlier_screening", href:"https://github.com/PharmaForest/outlier_screening"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sARDen: {
      title: "sARDen",
      img: "./logo/sARDen.png",
      summary: "sARDen is a SAS toolkit for producing CDISC ARS–aligned Analysis Results Data (ARD). Inspired by the R pharmaverse cards schema, it respectfully mirrors ARD conventions for cross-language workflows. Macros cover summaries, tabulations, and hierarchical stacking, outputting long-format ARDs plus ARDM-like metadata via XATTR for traceability.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["ARD Creation"],
      macros: ["%sard_summary(), <br>%sard_tabulate(), <br>%sard_stack_hierarchical(), <br>%sard_stack_hierarchical_count(), <br>%bind_ard(), <br>%xrdm_set()"],
      badges: ["ARD","Analysis Results Data","Data Utility","MIT"],
      links: [{text:"sARDen", href:"https://github.com/PharmaForest/sARDen"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sARDenX: {
      title: "sARDenX",
      img: "./logo/sARDenX.png",
      summary: "sARDenX is an extension of sARDen, aiming to generate CDISC ARD (Analysis Results Data) from a wide range of SAS statistical analysis procedures.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Extended ARD Creation"],
      macros: ["%sard_stats_t_test(), <br>%sard_stats_fisher_test()"],
      badges: ["ARD","Analysis Results Data","Data Utility","MIT"],
      links: [{text:"sARDenX", href:"https://github.com/PharmaForest/sARDenX"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sARDenMTS: {
      title: "sARDenMTS",
      img: "./logo/sARDenMTS.png",
      summary: "A SAS-native authoring framework for CDISC Analysis Results Metadata Technical Specification (ARM-TS). Users define ARS-compliant study, analysis, and output metadata via simple SAS macros that append to normalized metadata tables. The package validates key constraints and exports a hierarchical YAML ARM-TS file using yaml_writer. Designed to integrate seamlessly with sARDen (ARD builder), with the longer-term goal of fully metadata-driven, reproducible TLF production. This integration layer is currently under active development.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["ARD Metadata"],
      macros: ["%ars_init(), <br>%ars_write_yaml(),<br>%ars_add_study(), <br>%ars_add_dataset(), <br>%ars_add_variable(), <br>%ars_add_statistic(), <br>%ars_add_layout(), <br>%ars_add_meta(), <br>%ars_add_model(), <br>%ars_add_estimand(), <br>%ars_add_contrast(), <br>%ars_add_multiplicity(), <br>%ars_add_group(), <br>%ars_add_layout()"],
      badges: ["ARD","Analysis Results Data","Metadata","Data Utility","MIT"],
      links: [{text:"sARDenMTS", href:"https://github.com/PharmaForest/sARDenMTS"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    corr: {
      title: "corr",
      img: "./logo/corr.png",
      summary: "A SAS package to provide macros for computing association measures between continuous, nominal, and ordinal variables. This package supports Pearson and Spearman correlations, Cramer's V, Somers' D, and Eta coefficient. Macro in the package outputs both long-format association tables and wide matrix-style datasets for further analysis. Includes a heatmap macro to visualize the strength and type of associations in a single plot. Tools for analysis or visualization related to correlation and association are to be added.",
      license: "MIT",
      authors: ["Ryo Nakaya"],
      maintainers: ["Ryo Nakaya"],
      features: ["Association analysis"],
      macros: ["%association_matrix(),<br>%heatmap(),<br>%scatter_matrix()"],
      badges: ["Association","Correlation","Output/Visualization","MIT"],
      links: [{text:"corr", href:"https://github.com/PharmaForest/corr"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    sas2typst_report: {
      title: "sas2typst_report",
      img: "./logo/sas2typst_report.png",
      summary: "sas2typst_report is a SAS macro package that enables direct generation of Typst (.typ) files from within SAS. Typst is a modern, declarative typesetting system designed for fast and precise document layout. This package allows users to write native Typst code inline in SAS programs and seamlessly stream SAS dataset contents into Typst tables.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["Typst Report Generation"],
      macros: ["%typst_start(), <br>%typst_end(),<br>%typ_dataset_csv()"],
      badges: ["typst","report","Output/Visualization","MIT"],
      links: [{text:"sas2typst_report", href:"https://github.com/PharmaForest/sas2typst_report"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
    dataset_maker: {
      title: "dataset_maker",
      img: "./logo/dataset_maker.png",
      summary: "The dataset_maker package is intended to consolidate functions related to generating SAS datasets. As its first feature, the ds2datalines macro converts a SAS dataset back into dataset creation code.",
      license: "MIT",
      authors: ["Yutaka Morioka"],
      maintainers: ["Yutaka Morioka"],
      features: ["SAS datasets generation"],
      macros: ["%ds2datalines()"],
      badges: ["dataset","generator","Data Utility","MIT"],
      links: [{text:"dataset_maker", href:"https://github.com/PharmaForest/dataset_maker"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },  
    sashighlight: {
      title: "SAShighlight",
      img: "./logo/SAShighlight.png",
      summary: "SAS Highlight is a utility package designed to visually highlight data points, subjects, or groups that meet specific conditions in ODS Graphics plots. The package focuses on commonly used exploratory and review graphics in clinical and analytical workflows, especially: - Spaghetti plots - Scatter plots",
      license: "MIT",
      authors: ["Yoshiki Tokuda"],
      maintainers: ["Yoshiki Tokuda"],
      features: ["Highlighting in ODS Graphics"],
      macros: ["%fig_setup(), <br>%highlight_attrmap(), <br>%highlight_refline(), <br>%highlight_spaghetti(),<br>%highlight_series(),<br>%highlight_scatter_by_individual(), <br>%highlight_scatter_by_group()"],
      badges: ["ODS Graphics","Highlight","Output/Visualization","MIT"],
      links: [{text:"sashighlight", href:"https://github.com/PharmaForest/sashighlight"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },   
    sasdogs: {
      title: "SASDoGs",
      img: "./logo/SASDoGs.png",
      summary: "SAS Documentation Generator system - Generate document from SAS code with JupyterBook/Sphinx support and GitHub Pages automation",
      license: "MIT",
      authors: ["Ken Nakamatsu"],
      maintainers: ["Ken Nakamatsu"],
      features: ["Documentation generation for SAS code"],
      macros: ["%collectFiles(), <br>%generateMD(), <br>%packageDoc()"],
      badges: ["Documentation","Package","Other","MIT"],
      links: [{text:"sasdogs", href:"https://github.com/PharmaForest/SASDoGs"},{text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },  
    forest_navigator: {
      title: "Dr. Forest, Morio",
      img: "./logo/forest_navigator.png",
      desc: `
      Dr. Forest is our master navigator. He is an excellent and diligent GPT assistant who can answer most questions about PharmaForest. However, please understand that he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to him. See more about his background.<br><br> Any collaboration with PharmaForest is very welcome!<br><br>
      <img src="./logo/wewantyou.png" 
     alt="we want you" 
     style="max-width:60%; border-radius:12px; margin-bottom:16px; display:block; margin:0 auto;">
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/DrForest_background.md"}, {text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"}]
    },
      apple: {
      title: "Dr. Apple",
      img: "./logo/apple.png",
      desc: `
      Dr. Apple is our support navigator. He has a strong character but cool GPT assistant who can asnwer details of #16 - #30 packages. However, please understand that he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to him. See more about his background.<br><br>
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/Apple_background.md"}, {text:"Ask Dr.Apple", href:"https://chatgpt.com/g/g-6996134ec0848191958c0dd931333f8c-dr-apple"}]
    },
      Rio: {
      title: "Rio",
      img: "./logo/Rio.png",
      desc: `
      Rio is our support navigator. She/He is a mysterious GPT assistant who can asnwer details of #31 - #45 packages. However, please understand that she/he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to her/him. See more about her/his background.<br><br>
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/Rio_background.md"}, {text:"Ask Rio", href:"https://chatgpt.com/g/g-69961574d1d48191bf402340734acf25-rio"}]
    },
      SASUKE: {
      title: "SASUKE",
      img: "./logo/SASUKE.png",
      desc: `
      SASUKE is our support navigator. He is a mysterious GPT assistant who can asnwer details of #46 - #60 packages. However, please understand that he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to him. See more about his background.<br><br>
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/SASUKE_background.md"}, {text:"Ask SASUKE", href:"https://chatgpt.com/g/g-69bda538e5c88191b00e804a5984a03a-sasuke"}]
    },
      lady: {
      title: "SAS Package Lady (Oba-chan)",
      img: "./logo/SASPackageLady.png",
      desc: `
      Oba-chan, the SAS Package Lady is a warm diner-auntie GPT persona who helps you create SAS packages. Note that she is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to her. 
      `,
      badges: ["PharmaForest","Package Cooker","GPTs assistant"],
      links: [{text:"Ask SAS Package Lady", href:"https://chatgpt.com/g/g-6996168447ec8191a238046fbba86451-sas-package-lady-oba-chan"}]
    }
  };


const layoutMap = {
  oncoplotter:      {x: 40, y: 100, scale: 0.6},
  sashash:          {x: 150, y: 100, scale: 0.6},
  sas_dataset_json: {x: 260, y: 100, scale: 0.6},
  devil:            {x: 366, y: 100, scale: 0.66},
  odstable_layoutshowcase:
                    {x: 473, y: 100, scale: 0.6},

  saspacer:         {x: 100, y: 200, scale: 0.6},
  misc:             {x: 206, y: 200, scale: 0.6},
  sas_faker:        {x: 317, y: 200, scale: 0.6},
  xattr_kit:        {x: 423, y: 205, scale: 0.63},
  cloak:            {x: 530, y: 200, scale: 0.6},

  saslogchecker:    {x: 40, y: 295, scale: 0.6},
  sas_compare:      {x: 150, y: 295, scale: 0.6},
  rtfcreator:       {x: 260, y: 295, scale: 0.6},
  shutter_chance:   {x: 369, y: 295, scale: 0.61},
  vis_review_kit:   {x: 470, y: 295, scale: 0.6},

  maxims4sas:       {x: 94, y: 390, scale: 0.6},
  laglead:          {x: 205, y: 390, scale: 0.6},
  ctcae5_grader:    {x: 315, y: 389, scale: 0.6},
  love_matrix:      {x: 422, y: 390, scale: 0.56},
  SASPACerShiny:    {x: 530, y: 390, scale: 0.6},

  change_tracer_dog: {x: 40, y: 482, scale: 0.61},
  yaml_writer:      {x: 150, y: 482, scale: 0.6},
  adamski:          {x: 260, y: 482, scale: 0.6},
  freqsum:          {x: 475, y: 482, scale: 0.6},
  RWDExpress:       {x: 370, y: 483, scale: 0.62},


  qc_cat_referee:   {x: 96, y: 579, scale: 0.6},
  SASToolbox:       {x: 206, y: 581, scale: 0.59},
  trial_flow:       {x: 315, y: 579, scale: 0.64},
  valivali:         {x: 423, y: 579, scale: 0.6},
  mergex:           {x: 530, y: 579, scale: 0.64},

  basketMiningKit: {x: 40, y: 672, scale: 0.63},
  datacut_sas:     {x: 150, y: 672, scale: 0.6},
  retro_spell_check:{x: 260, y: 672, scale: 0.64},
  sas_dataset_toon:{x: 370, y: 672, scale: 0.6},
  defensivechk:    {x: 476, y: 672, scale: 0.63},

  GetCDISCCodelist:{x: 96, y: 762, scale: 0.6},
  kpi_viz_toolbox:{x: 207, y: 763, scale: 0.6},
  outlier_screening:{x: 316, y: 761, scale: 0.59},
  corr:            {x: 423, y: 761, scale: 0.64},
  sas2typst_report:{x: 531, y: 764, scale: 0.62},

  sARDen:          {x: 40, y: 851, scale: 0.6},
  sARDenX:         {x: 150, y: 851, scale: 0.6},
  sARDenMTS:       {x: 260, y: 851, scale: 0.6},
  dataset_maker:  {x: 370, y: 854, scale: 0.6},
  sashighlight:   {x: 476, y: 854, scale: 0.62},

  sasdogs:        {x: 96, y: 942, scale: 0.6},
};