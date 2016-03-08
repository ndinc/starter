<?php
  global $_DATA;

  $rev_path = dirname(__DIR__)."/assets/rev-manifest.json";
  if(file_exists($rev_path)){
    $rev = file_get_contents($rev_path);
    $rev_json = json_decode($rev, true);
  }else{
    $rev_json = null;
  }

  $data_path = dirname(__DIR__)."/assets/data/global.json";
  if(file_exists($data_path)){
    $data = file_get_contents($data_path);
    $data_json = json_decode($data, true);
  }else{
    $data_json = array();
  }

  $_DATA = array_merge(array(
    'rev' => $rev_json
  ), $data_json);