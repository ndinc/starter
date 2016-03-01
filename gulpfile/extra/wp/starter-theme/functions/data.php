<?php
  global $_DATA;
  // $mata = file_get_contents( dirname(__DIR__)."/data/meta.json");
  // $page = file_get_contents( dirname(__DIR__)."/data/page.json");

  $rev_path = dirname(__DIR__)."/assets/rev-manifest.json";
  if(file_exists($rev_path)){
    $rev = file_get_contents($rev_path);
    $rev_json = json_decode($rev, true);
  }else{
    $rev_json = null;
  }

  $_DATA = array(
    // 'meta' => json_decode($mata, true),
    // 'page' => json_decode($page, true),
    'rev' => $rev_json
  );
