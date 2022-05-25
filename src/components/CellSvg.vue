<template>
<svg
   width="250px"
   heigth="200px"
   viewBox="250 200 500 300"
   style="width:100%;height:100%;overflow:visible"
   >
  <defs
     id="defs4">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient8750">
      <stop
         style="stop-color:#9955ff;stop-opacity:1;"
         offset="0"
         id="stop8752" />
      <stop
         style="stop-color:#9955ff;stop-opacity:0;"
         offset="1"
         id="stop8754" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4721">
      <stop
         style="stop-color:#2d163d;stop-opacity:1;"
         offset="0"
         id="stop4723" />
      <stop
         style="stop-color:#2d163d;stop-opacity:0;"
         offset="1"
         id="stop4725" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4305">
      <stop
         style="stop-color:#9955ff;stop-opacity:1;"
         offset="0"
         id="stop4307" />
      <stop
         style="stop-color:#9955ff;stop-opacity:0;"
         offset="1"
         id="stop4309" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4305"
       id="linearGradient4311"
       x1="74.285713"
       y1="756.64795"
       x2="802.85712"
       y2="1083.7908"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.76008645,0,0,0.73444057,86.379687,127.54725)" />
        <filter id="outline">
            <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
            <feFlood flood-color="white" flood-opacity="1" result="PINK"></feFlood>
            <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
            <feMerge>
                <feMergeNode in="OUTLINE" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
       <filter id="contour">
	    <feMorphology in="SourceAlpha" operator="dilate" radius="2"/>
	    <feComposite in="SourceGraphic"/>
	  </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.05"
       y="-0.05"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB;"
       id="filter4938">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur4940" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite4942" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur4944" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite4946" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite4948" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix4950" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur4952" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting4954">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight4956" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite4958" />
      <feComposite
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite4960" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite4962" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend4964"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix4994" />
      <feGaussianBlur
         id="feGaussianBlur4996"
         result="result8"
         stdDeviation="4"
         in="fbSourceGraphic" />
      <feTurbulence
         id="feTurbulence4998"
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22" />
      <feComposite
         id="feComposite5000"
         in2="result8"
         operator="in"
         in="fbSourceGraphic"
         result="result6" />
      <feDisplacementMap
         id="feDisplacementMap5002"
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7" />
      <feFlood
         id="feFlood5004"
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         result="result10" />
      <feComposite
         id="feComposite5006"
         in2="result4"
         operator="atop"
         result="result2" />
      <feComposite
         id="feComposite5008"
         in2="fbSourceGraphic"
         operator="atop"
         in="result2"
         result="result9" />
      <feGaussianBlur
         id="feGaussianBlur5010"
         result="result0"
         in="result9"
         stdDeviation="8" />
      <feSpecularLighting
         id="feSpecularLighting5012"
         specularExponent="15"
         specularConstant="0.7"
         surfaceScale="5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0">
        <feDistantLight
           id="feDistantLight5014"
           azimuth="235"
           elevation="50" />
      </feSpecularLighting>
      <feComposite
         id="feComposite5016"
         in2="result9"
         operator="in"
         result="result2"
         in="result1" />
      <feComposite
         id="feComposite5018"
         in2="result2"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9" />
      <feConvolveMatrix
         id="feConvolveMatrix5020"
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10" />
      <feBlend
         id="feBlend5022"
         in2="result10"
         mode="multiply"
         in="result10"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix5024" />
      <feGaussianBlur
         id="feGaussianBlur5026"
         stdDeviation="5"
         result="result1"
         in="fbSourceGraphic" />
      <feComposite
         id="feComposite5028"
         in2="result1"
         in="result1"
         result="result4"
         operator="xor" />
      <feGaussianBlur
         id="feGaussianBlur5030"
         stdDeviation="8"
         result="result6" />
      <feComposite
         id="feComposite5032"
         in2="fbSourceGraphic"
         operator="atop"
         in="result6"
         result="result8" />
      <feComposite
         id="feComposite5034"
         in2="result8"
         operator="in"
         result="fbSourceGraphic"
         in="result6" />
      <feColorMatrix
         id="feColorMatrix5036"
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 " />
      <feGaussianBlur
         id="feGaussianBlur5038"
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2" />
      <feSpecularLighting
         id="feSpecularLighting5040"
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0">
        <fePointLight
           id="fePointLight5042"
           z="20000"
           y="-10000"
           x="-5000" />
      </feSpecularLighting>
      <feComposite
         id="feComposite5044"
         in2="fbSourceGraphicAlpha"
         operator="in"
         result="result2"
         in="result1" />
      <feComposite
         id="feComposite5046"
         in2="result2"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic" />
      <feComposite
         id="feComposite5048"
         in2="result4"
         operator="in"
         in="result4"
         result="result9" />
      <feBlend
         id="feBlend5050"
         in2="result4"
         mode="multiply"
         in="result9" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.05"
       y="-0.05"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB;"
       id="filter4966">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur4968" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite4970" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur4972" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite4974" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite4976" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix4978" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur4980" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting4982">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight4984" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite4986" />
      <feComposite
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite4988" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite4990" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend4992" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.05"
       y="-0.05"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB;"
       id="filter5052">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5054" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5056" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5058" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5060" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5062" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5064" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5066" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting5068">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5070" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5072" />
      <feComposite
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5074" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5076" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5078" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.05"
       y="-0.05"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB;"
       id="filter5080">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5082" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5084" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5086" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5088" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5090" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5092" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5094" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting5096">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5098" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5100" />
      <feComposite
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5102" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5104" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5106" />
    </filter>
    <filter
       inkscape:label="Film Grain"
       inkscape:menu="Image Effects"
       inkscape:menu-tooltip="Adds a small scale graininess"
       style="color-interpolation-filters:sRGB;"
       id="filter5108">
      <feTurbulence
         type="fractalNoise"
         numOctaves="3"
         baseFrequency="1"
         seed="0"
         result="result0"
         id="feTurbulence5110" />
      <feColorMatrix
         result="result4"
         values="0"
         type="saturate"
         id="feColorMatrix5112" />
      <feComposite
         in="SourceGraphic"
         in2="result4"
         operator="arithmetic"
         k1="1.25"
         k2="0.5"
         k3="0.5"
         result="result2"
         id="feComposite5114" />
      <feBlend
         result="result5"
         mode="normal"
         in="result2"
         in2="SourceGraphic"
         id="feBlend5116" />
      <feComposite
         in="result5"
         in2="SourceGraphic"
         operator="in"
         result="result3"
         id="feComposite5118" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB;"
       id="filter5829">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.7"
         surfaceScale="5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting5847">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851" />
      <feComposite
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-60" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-62" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-19" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-93" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-67" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-44" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-86">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-46" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-27" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-60" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-90" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-04">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-55" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-97" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-04" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-35" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-55" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-62" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB;"
       id="filter7896">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.7"
         surfaceScale="5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting7914">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918" />
      <feComposite
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB;"
       id="filter7926">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.7"
         surfaceScale="5"
         lighting-color="rgb(255,255,255)"
         result="result1"
         in="result0"
         id="feSpecularLighting7944">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948" />
      <feComposite
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-54" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-59" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-71" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-24" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-26" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-65">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-16" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-38" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-37" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-93" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-01" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-63" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-22" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-75" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-38" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-32" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-20" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-53" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-10" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-03" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-75" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-00" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-73" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-12" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-86" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-81" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-64" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-16" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-321" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-43">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-94" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-54" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-75" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-79">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-76" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-15" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-90">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-74" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-46" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-60" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-04" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-648" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-32" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-83" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-07" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-88" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-62" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-05" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-33" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-96" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-42" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-11">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-2" />
    </filter>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient8750"
       id="linearGradient8756"
       x1="212.57042"
       y1="1068.8663"
       x2="102.55171"
       y2="688.24988"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.76854484,-0.00308137,0.00319673,0.81680309,316.5976,97.209598)" />
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-7-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-4-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-5-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-1-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-0-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-5-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-7-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-9-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-8-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-6-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-8-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-2-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-7-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-1-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-9-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-8-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-7-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-33-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-96-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-42-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-3-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-9-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-3-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-3-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-11-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-6-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-7-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-9-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-1-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-2-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-9-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-83-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-4-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-8-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-3-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-07-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-3-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-88-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-2-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-0-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-5-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-1-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-8-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-2-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-2-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-7-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-2-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-1-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-7-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-8-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-0-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-62-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-6-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-9-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-7-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-05-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-2-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-4-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-4-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-3-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-43-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-1-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-94-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-54-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-6-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-2-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-3-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-2-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-75-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-79-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-1-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-3-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-76-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-2-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-15-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-90-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-74-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-46-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-60-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-1-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-1-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-9-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-04-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-9-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-8-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-5-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-3-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-648-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-32-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-1-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-3-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-2-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-6-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-20-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-53-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-8-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-9-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-4-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-10-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-8-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-03-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-2-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-75-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-00-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-6-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-6-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-3-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-73-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-12-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-4-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-0-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-0-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-86-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-5-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-1-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-8-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-81-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-64-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-16-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-321-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-65-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-4-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-16-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-4-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-4-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-38-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-0-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-37-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-93-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-2-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-01-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-6-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-7-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-63-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-22-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-5-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-7-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-2-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-6-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-75-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-9-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-8-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-7-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-4-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-7-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-38-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-2-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-6-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-1-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-32-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-6-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-5-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-1-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-5-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-54-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-3-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-4-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-6-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-9-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-0-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-0-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-59-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-1-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-0-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-3-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-9-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-6-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-6-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-1-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-5-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-71-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-24-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-8-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-26-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-3-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-2-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-8-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-4-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-5-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-3-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-4-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-0-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-9-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-7-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-5-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-7-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-1-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-3-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-6-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-7-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-2-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-8-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-6-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-4-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-1-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-1-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-0-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-7-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-8-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-0-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-7-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-2-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-3-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-2-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-2-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-3-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-9-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-7-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-7-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-6-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-17" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-79" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-30" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-57" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-97" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-73" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-20" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-13" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-70" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-40" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-16" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-92" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-90" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-35">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-44" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-97" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-8-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-5-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-5-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-2-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-5-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-3-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-2-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-62-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-0-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-2-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-1-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-6-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-2-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-6-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-3-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-0-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-9-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-4-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-3-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-5-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-2-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-1-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-3-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-0-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-7-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-4-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-0-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-7-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-3-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-5-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-8-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-0-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-3-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-9-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-5-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-6-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-4-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-2-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-8-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-6-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-8-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-2-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-8-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-6-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-2-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-4-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-8-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-9-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-5-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-2-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-4-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-7-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-4-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-6-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-4-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-8-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-1-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-2-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-0-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-1-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-6-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-5-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-6-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-4-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-7-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-9-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-9-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-1-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-5-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-7-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-3-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-5-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-2-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-8-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-3-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-82" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-44" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-32" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-64" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-04-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-4-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-8-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-6-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-4-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-55-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-97-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-5-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-04-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-9-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-35-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-9-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-7-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-7-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-55-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-3-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-9-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-4-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-46-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-27-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-5-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-3-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-3-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-1-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-6-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-60-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-5-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-90-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-2-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-5-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-07">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-33" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-55" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-23" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-70" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-45" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-26" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-10" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-1-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-5-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-9-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-9-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-0-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-1-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-4-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-0-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-2-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-86-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-6-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-6-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-4-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-4-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-1-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-02" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-68" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-91" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-28" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-18" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-50" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-57" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-18" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-60" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-0-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-93-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-2-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-67-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-5-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-1-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-7-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-44-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-0-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-7-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-8-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-5-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-1-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-5-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-9-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-1-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-0-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-6-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-5-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-6-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-7-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-4-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-1-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-2-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-1-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-9-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-0-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-5-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-2-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-2-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-2-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-3-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-8-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-60-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-2-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-62-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-0-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-2-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-6-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-2-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-2-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-19-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-2-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-0-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-7-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-4-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-9-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-4-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-6-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-8-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-6-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-2-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-4-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-9-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-6-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-7-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-1-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-9-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-9-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-1-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-21" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-20" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-12" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-08" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-15" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-07" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-95" />
    </filter>
    <filter
       inkscape:label="Film Grain"
       inkscape:menu="Image Effects"
       inkscape:menu-tooltip="Adds a small scale graininess"
       style="color-interpolation-filters:sRGB"
       id="filter5108-2">
      <feTurbulence
         type="fractalNoise"
         numOctaves="3"
         baseFrequency="1"
         seed="0"
         result="result0"
         id="feTurbulence5110-2" />
      <feColorMatrix
         result="result4"
         values="0"
         type="saturate"
         id="feColorMatrix5112-6" />
      <feComposite
         k4="0"
         in="SourceGraphic"
         in2="result4"
         operator="arithmetic"
         k1="1.25"
         k2="0.5"
         k3="0.5"
         result="result2"
         id="feComposite5114-3" />
      <feBlend
         result="result5"
         mode="normal"
         in="result2"
         in2="SourceGraphic"
         id="feBlend5116-9" />
      <feComposite
         in="result5"
         in2="SourceGraphic"
         operator="in"
         result="result3"
         id="feComposite5118-0" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter5052-6">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5054-7" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5056-3" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5058-2" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5060-3" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5062-2" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5064-4" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5066-7" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5068-6">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5070-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5072-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5074-1" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5076-5" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5078-8" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter4938-1">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur4940-5" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite4942-0" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur4944-2" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite4946-5" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite4948-5" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix4950-3" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur4952-3" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting4954-4">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight4956-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite4958-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite4960-5" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite4962-9" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend4964-9"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix4994-1" />
      <feGaussianBlur
         id="feGaussianBlur4996-4"
         result="result8"
         stdDeviation="4"
         in="fbSourceGraphic" />
      <feTurbulence
         id="feTurbulence4998-2"
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22" />
      <feComposite
         id="feComposite5000-8"
         in2="result8"
         operator="in"
         in="fbSourceGraphic"
         result="result6" />
      <feDisplacementMap
         id="feDisplacementMap5002-1"
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7" />
      <feFlood
         id="feFlood5004-0"
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         result="result10" />
      <feComposite
         id="feComposite5006-4"
         in2="result4"
         operator="atop"
         result="result2" />
      <feComposite
         id="feComposite5008-5"
         in2="fbSourceGraphic"
         operator="atop"
         in="result2"
         result="result9" />
      <feGaussianBlur
         id="feGaussianBlur5010-4"
         result="result0"
         in="result9"
         stdDeviation="8" />
      <feSpecularLighting
         id="feSpecularLighting5012-5"
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0">
        <feDistantLight
           id="feDistantLight5014-7"
           azimuth="235"
           elevation="50" />
      </feSpecularLighting>
      <feComposite
         id="feComposite5016-0"
         in2="result9"
         operator="in"
         result="result2"
         in="result1" />
      <feComposite
         k4="0"
         k1="0"
         id="feComposite5018-3"
         in2="result2"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9" />
      <feConvolveMatrix
         id="feConvolveMatrix5020-4"
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10" />
      <feBlend
         id="feBlend5022-8"
         in2="result10"
         mode="multiply"
         in="result10"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix5024-1" />
      <feGaussianBlur
         id="feGaussianBlur5026-0"
         stdDeviation="5"
         result="result1"
         in="fbSourceGraphic" />
      <feComposite
         id="feComposite5028-2"
         in2="result1"
         in="result1"
         result="result4"
         operator="xor" />
      <feGaussianBlur
         id="feGaussianBlur5030-2"
         stdDeviation="8"
         result="result6" />
      <feComposite
         id="feComposite5032-0"
         in2="fbSourceGraphic"
         operator="atop"
         in="result6"
         result="result8" />
      <feComposite
         id="feComposite5034-9"
         in2="result8"
         operator="in"
         result="fbSourceGraphic"
         in="result6" />
      <feColorMatrix
         id="feColorMatrix5036-4"
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 " />
      <feGaussianBlur
         id="feGaussianBlur5038-3"
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2" />
      <feSpecularLighting
         id="feSpecularLighting5040-9"
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0">
        <fePointLight
           id="fePointLight5042-5"
           z="20000"
           y="-10000"
           x="-5000" />
      </feSpecularLighting>
      <feComposite
         id="feComposite5044-0"
         in2="fbSourceGraphicAlpha"
         operator="in"
         result="result2"
         in="result1" />
      <feComposite
         k4="0"
         k1="0"
         id="feComposite5046-2"
         in2="result2"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic" />
      <feComposite
         id="feComposite5048-0"
         in2="result4"
         operator="in"
         in="result4"
         result="result9" />
      <feBlend
         id="feBlend5050-5"
         in2="result4"
         mode="multiply"
         in="result9" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter5080-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5082-2" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5084-9" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5086-4" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5088-9" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5090-1" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5092-3" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5094-1" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5096-2">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5098-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5100-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5102-6" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5104-0" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5106-4" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter4966-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur4968-1" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite4970-0" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur4972-9" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite4974-9" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite4976-9" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix4978-5" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur4980-7" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting4982-0">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight4984-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite4986-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite4988-2" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite4990-4" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend4992-9" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter5052-6-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5054-7-1" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5056-3-7" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5058-2-9" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5060-3-1" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5062-2-5" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5064-4-0" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5066-7-6" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5068-6-4">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5070-0-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5072-4-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5074-1-0" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5076-5-4" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5078-8-7" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter5052-6-3">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5054-7-3" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5056-3-0" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5058-2-3" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5060-3-0" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5062-2-8" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5064-4-6" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5066-7-4" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5068-6-9">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5070-0-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5072-4-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5074-1-3" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5076-5-3" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5078-8-8" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter5052-6-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5054-7-7" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5056-3-6" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5058-2-7" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5060-3-15" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5062-2-4" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5064-4-7" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5066-7-0" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5068-6-0">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5070-0-31" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5072-4-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5074-1-6" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5076-5-41" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5078-8-1" />
    </filter>
    <filter
       inkscape:label="Thin Membrane"
       inkscape:menu="Ridges"
       inkscape:menu-tooltip="Thin like a soap membrane"
       x="-0.050000001"
       y="-0.050000001"
       width="1.1"
       height="1.1"
       style="color-interpolation-filters:sRGB"
       id="filter5080-8-6">
      <feGaussianBlur
         stdDeviation="5"
         result="result1"
         id="feGaussianBlur5082-2-8" />
      <feComposite
         in="result1"
         in2="result1"
         result="result4"
         operator="xor"
         id="feComposite5084-9-3" />
      <feGaussianBlur
         stdDeviation="8"
         result="result6"
         id="feGaussianBlur5086-4-9" />
      <feComposite
         operator="atop"
         in="result6"
         in2="SourceGraphic"
         result="result8"
         id="feComposite5088-9-1" />
      <feComposite
         operator="in"
         result="fbSourceGraphic"
         in="result6"
         in2="result8"
         id="feComposite5090-1-4" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 "
         id="feColorMatrix5092-3-9" />
      <feGaussianBlur
         result="result0"
         in="fbSourceGraphicAlpha"
         stdDeviation="2"
         id="feGaussianBlur5094-1-6" />
      <feSpecularLighting
         specularExponent="25"
         specularConstant="2"
         surfaceScale="-5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5096-2-7">
        <fePointLight
           z="20000"
           y="-10000"
           x="-5000"
           id="fePointLight5098-4-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="fbSourceGraphicAlpha"
         id="feComposite5100-1-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="2"
         k2="1"
         operator="arithmetic"
         result="result4"
         in="fbSourceGraphic"
         in2="result2"
         id="feComposite5102-6-0" />
      <feComposite
         operator="in"
         in="result4"
         result="result9"
         in2="result4"
         id="feComposite5104-0-6" />
      <feBlend
         mode="multiply"
         in="result9"
         in2="result4"
         id="feBlend5106-4-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-7-2-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-4-7-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-5-6-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-1-8-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-0-8-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-5-6-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-7-3-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-9-3-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-8-9-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-6-8-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-8-1-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-2-2-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-7-2-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-1-2-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-9-8-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-8-4-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-7-9-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-33-2-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-96-4-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-42-9-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-3-8-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-9-1-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-3-0-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-3-8-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-11-5-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-6-1-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-7-2-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-9-7-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-1-3-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-2-6-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-9-9-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-83-9-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-4-3-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-8-4-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-3-1-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-07-4-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-3-9-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-88-2-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-2-1-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-0-3-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-5-9-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-1-2-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-8-3-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-2-4-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-2-2-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-7-3-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-2-9-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-1-1-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-7-2-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-8-6-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-0-9-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-62-8-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-6-3-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-9-0-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-7-7-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-05-3-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-2-0-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-4-4-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-4-7-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-3-4-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-43-6-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-1-1-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-94-9-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-54-1-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-6-3-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-2-4-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-3-7-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-2-7-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-75-3-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-79-5-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-1-2-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-3-1-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-76-1-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-2-3-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-15-0-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-90-3-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-74-9-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-46-1-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-60-2-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-1-3-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-1-5-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-9-3-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-04-3-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-9-0-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-8-6-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-5-6-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-3-4-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-648-7-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-32-6-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-1-0-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-3-6-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-2-4-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-6-9-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-20-4-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-53-1-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-8-9-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-9-5-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-4-0-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-10-8-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-8-5-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-03-5-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-2-7-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-75-6-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-00-3-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-6-8-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-6-9-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-3-9-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-73-7-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-12-4-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-4-0-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-0-4-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-0-7-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-86-5-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-5-9-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-1-9-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-8-0-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-81-6-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-64-8-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-16-7-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-321-4-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-65-9-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-4-3-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-16-9-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-4-9-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-4-4-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-38-5-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-0-8-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-37-4-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-93-8-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-2-5-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-01-7-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-6-1-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-7-5-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-63-7-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-22-3-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-5-9-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-7-5-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-2-4-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-6-1-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-75-2-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-9-2-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-8-8-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-7-0-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-4-9-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-7-8-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-38-1-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-2-8-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-6-3-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-1-7-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-32-6-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-6-4-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-5-2-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-1-8-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-5-6-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-54-0-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-3-6-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-4-5-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-6-7-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-9-4-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-0-0-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-0-8-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-59-7-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-1-8-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-0-4-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-3-5-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-9-0-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-6-4-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-6-0-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-1-3-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-5-2-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-71-9-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-24-3-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-8-6-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-26-5-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-3-8-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-2-8-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-8-2-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-4-4-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-5-4-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-3-2-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-4-0-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-0-1-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-9-3-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-7-0-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-5-3-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-7-9-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-1-3-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-3-2-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-6-0-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-7-5-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-2-8-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-8-4-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-6-1-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-4-7-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-1-7-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-1-0-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-0-5-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-7-1-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-8-4-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-0-0-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-7-0-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-2-5-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-3-4-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-2-4-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-2-0-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-3-6-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-9-7-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-7-7-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-7-3-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-6-8-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-7-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-17-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-5-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-79-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-8-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-30-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-6-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-57-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-3-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-4-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-97-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-9-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-73-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-20-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-13-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-2-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-70-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-40-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-4-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-3-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-16-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-92-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-9-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-90-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-35-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-0-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-44-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-8-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-9-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-97-9" />
    </filter>
    <filter
       inkscape:label="Film Grain"
       inkscape:menu="Image Effects"
       inkscape:menu-tooltip="Adds a small scale graininess"
       style="color-interpolation-filters:sRGB;"
       id="filter13324">
      <feTurbulence
         type="fractalNoise"
         numOctaves="3"
         baseFrequency="1"
         seed="0"
         result="result0"
         id="feTurbulence13326" />
      <feColorMatrix
         result="result4"
         values="0"
         type="saturate"
         id="feColorMatrix13328" />
      <feComposite
         in="SourceGraphic"
         in2="result4"
         operator="arithmetic"
         k1="1.25"
         k2="0.5"
         k3="0.5"
         result="result2"
         id="feComposite13330" />
      <feBlend
         result="result5"
         mode="normal"
         in="result2"
         in2="SourceGraphic"
         id="feBlend13332" />
      <feComposite
         in="result5"
         in2="SourceGraphic"
         operator="in"
         result="result3"
         id="feComposite13334" />
    </filter>
    <filter
       inkscape:label="Flex Metal"
       inkscape:menu="Materials"
       inkscape:menu-tooltip="Bright, polished uneven metal casting, colorizable"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB;"
       id="filter13515">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523" />
      <feComposite
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531" />
    </filter>
    <filter
       inkscape:label="Flex Metal"
       inkscape:menu="Materials"
       inkscape:menu-tooltip="Bright, polished uneven metal casting, colorizable"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-2">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-8" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-8" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-2" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-5" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-5" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-2" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB;"
       id="filter13515-4">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645" />
      <feTurbulence
         id="feTurbulence13647"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08"
         in="fbSourceGraphic" />
      <feGaussianBlur
         id="feGaussianBlur13649"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2" />
      <feTurbulence
         id="feTurbulence13647-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-9-9-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-83-9-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-4-3-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-8-4-81" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-3-1-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-07-4-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-3-9-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-88-2-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-2-1-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-0-3-97">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-5-9-77" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-1-2-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-8-3-01" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-2-4-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-2-2-46" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-7-3-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-2-9-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-1-1-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-7-2-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-8-6-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-0-9-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-62-8-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-6-3-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-9-0-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-7-7-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-05-3-39" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-2-0-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-4-4-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-4-7-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-3-4-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-1">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-3" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-3" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-2" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-5" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-5"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-3" />
      <feTurbulence
         id="feTurbulence13647-4-0"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-4"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-7"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-8" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-7">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-8" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-8" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-3" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-5" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-6" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-8"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-33" />
      <feTurbulence
         id="feTurbulence13647-4-7"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-8"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-77"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-73"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-37" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-38" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-21" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-63">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-21" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-6" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-70">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-1" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-2" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-9" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-7" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-3" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-30" />
      <feTurbulence
         id="feTurbulence13647-4-5"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-3"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-5"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-8"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-29" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-29">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-42" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-7" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-6">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-10" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-7" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-1" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-1" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-6" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-30" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-81"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-8" />
      <feTurbulence
         id="feTurbulence13647-4-8"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-7"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-0"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-5"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-61" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-76" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-84" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-04" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-37" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-62">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-62" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-24" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-28">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-81" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-5" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81" />
      <feTurbulence
         id="feTurbulence13647-4-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-1">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-5" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-9" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-2" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-7" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-5" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-5"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-9" />
      <feTurbulence
         id="feTurbulence13647-4-4-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-4"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-0"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-3"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-16">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-3" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-7" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-1" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-8" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-0"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-0" />
      <feTurbulence
         id="feTurbulence13647-4-4-1"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-3"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-6"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-5">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-5" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-0" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-90" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-8" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-4" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-2" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-7" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-9"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-2" />
      <feTurbulence
         id="feTurbulence13647-4-4-3"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-9"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-9"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-0" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-7" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-2" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-12" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-7" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-3" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-84" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-3"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-1" />
      <feTurbulence
         id="feTurbulence13647-4-4-5"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-49"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-3"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-8"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-52">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-7" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-4" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-7" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-6" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-4" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-6" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-1"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-93" />
      <feTurbulence
         id="feTurbulence13647-4-4-0"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-5"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-8"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-36"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-97">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-1" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-31" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-6" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-5" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-5" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-71" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-09" />
      <feTurbulence
         id="feTurbulence13647-4-4-16"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-7"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-85"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-63"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-97-6">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-1-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-31-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-8-9" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-6-9" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-5-4" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-5-0" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-71-5" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-4-3"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-09-3" />
      <feTurbulence
         id="feTurbulence13647-4-4-16-3"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-7-5"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-85-3"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-63-8"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-52-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-7-0" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-2-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-4-5" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-7-8" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-6-6" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-4-2" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-6-9" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-1-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-93-4" />
      <feTurbulence
         id="feTurbulence13647-4-4-0-1"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-5-8"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-8-3"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-36-6"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-9-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-0-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-7-0" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-2-3" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-12-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-7-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-3-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-84-6" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-3-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-1-1" />
      <feTurbulence
         id="feTurbulence13647-4-4-5-7"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-49-8"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-3-4"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-8-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-0">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-55" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-71" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-6" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-04" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-8" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-75" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-85" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-41"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-03" />
      <feTurbulence
         id="feTurbulence13647-4-4-2"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-41"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-68"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-5"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-5-1">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-5-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-0-4" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-90-6" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-8-9" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-4-2" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-2-3" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-7-8" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-9-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-2-2" />
      <feTurbulence
         id="feTurbulence13647-4-4-3-0"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-9-2"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-9-9"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-7-2"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-26" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-94" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-70">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-93" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-48">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-50" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-54" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-43" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-73">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-55" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-56" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-80" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-74">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-72" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6-7-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8-2-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2-3-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9-2-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9-1-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6-4-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8-8-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9-1-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2-4-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7-9-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7-9-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0-0-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9-2-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1-7-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3-6-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3-4-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5-9-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9-8-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2-3-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7-8-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6-3-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3-2-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4-4-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9-6-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6-1-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1-9-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8-5-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8-1-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8-2-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7-0-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-9-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-9-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-2-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-1-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-55-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-56-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-80-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-9-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-5-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-74-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-9-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-3-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-2-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-72-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-7-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-48-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-50-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-3-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-8-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-0-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-54-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-8-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-8-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-43-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-73-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-1-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-2-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-5-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-7-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-3-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-3-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-5-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-7-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-9-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-1-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-1-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-3-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-6-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-4-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-70-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-6-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-93-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-1-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-2-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-9-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-4-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-4-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-9-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-26-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-5-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-7-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-0-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-3-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-9-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-2-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-8-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-94-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-7-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-3-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-1-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-2-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-1-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-4-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-2-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-3-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-5-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-6-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-5-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-0-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-7-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-5-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-9-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-3-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-6-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-0-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-35">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-94" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-80" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-78" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-57" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-21" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-96" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-97-6-0">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-1-3-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-31-9-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-8-9-2" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-6-9-7" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-5-4-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-5-0-9" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-71-5-6" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-4-3-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-09-3-4" />
      <feTurbulence
         id="feTurbulence13647-4-4-16-3-3"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-7-5-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-85-3-2"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-63-8-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-52-9-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-7-0-0" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-2-9-5" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-4-5-5" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-7-8-4" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-6-6-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-4-2-0" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-6-9-4" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-1-2-9"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-93-4-8" />
      <feTurbulence
         id="feTurbulence13647-4-4-0-1-5"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-5-8-7"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-8-3-9"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-36-6-3"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-9-9-6">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-0-9-0" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-7-0-5" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-2-3-6" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-12-2-4" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-7-0-9" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-3-6-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-84-6-9" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-3-2-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-1-1-3" />
      <feTurbulence
         id="feTurbulence13647-4-4-5-7-1"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-49-8-1"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-3-4-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-8-7-6"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-5-1-2">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-5-9-4" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-0-4-1" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-90-6-0" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-8-9-7" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-4-2-4" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-2-3-2" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-7-8-7" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-9-4-8"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-2-2-9" />
      <feTurbulence
         id="feTurbulence13647-4-4-3-0-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-9-2-7"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-9-9-5"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-7-2-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-0-7">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-55-8" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-71-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-6-3" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-04-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-8-1" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-75-4" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-85-7" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-41-7"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-03-5" />
      <feTurbulence
         id="feTurbulence13647-4-4-2-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-41-7"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-68-4"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-5-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-97-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-1-7" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-31-4" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-8-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-6-4" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-5-7" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-5-5" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-71-6" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-4-0"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-09-7" />
      <feTurbulence
         id="feTurbulence13647-4-4-16-8"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-7-2"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-85-1"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-63-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-52-4">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-7-4" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-2-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-4-6" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-7-4" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-6-1" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-4-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-6-8" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-1-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-93-5" />
      <feTurbulence
         id="feTurbulence13647-4-4-0-13"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-5-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-8-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-36-5"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-9-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-0-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-7-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-2-1" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-12-4" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-7-4" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-3-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-84-3" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-3-0"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-1-4" />
      <feTurbulence
         id="feTurbulence13647-4-4-5-6"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-49-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-3-5"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-8-74"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-5-5">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-5-5" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-0-1" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-90-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-8-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-4-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-2-5" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-7-3" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-9-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-2-4" />
      <feTurbulence
         id="feTurbulence13647-4-4-3-1"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-9-0"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-9-1"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-7-24"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-16-1">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-3-2" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-3-6" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-7-5" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-1-8" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-0-9" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-6-3" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-8-0" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-0-3"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-0-5" />
      <feTurbulence
         id="feTurbulence13647-4-4-1-0"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-3-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-6-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-6-0"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-1-4">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-6-2" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-5-1" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-9-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-0-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-2-6" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-7-0" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-5-7" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-5-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-9-4" />
      <feTurbulence
         id="feTurbulence13647-4-4-4-7"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-4-1"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-0-3"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-3-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-4">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-08" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-24" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-3" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-79" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-43" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-1" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-30"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-5" />
      <feTurbulence
         id="feTurbulence13647-4-4-35"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-98"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-56"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-70-2">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-1-5" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-9-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-2-1" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-9-7" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-0-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-7-7" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-3-6" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-2-0"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-30-6" />
      <feTurbulence
         id="feTurbulence13647-4-5-6"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-3-5"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-5-8"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-8-3"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-1-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-0-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-9-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-9-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-6-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-29-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-4-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-8-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-0-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-29-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-7-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-3-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-1-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-6-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-6-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-7-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-1-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-0-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-5-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-9-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-42-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-2-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-9-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-2-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-9-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-5-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-1-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-7-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-3-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-7-6" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-7-1">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-8-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-8-5" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-3-7" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-0-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-5-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-6-2" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-6-3" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-8-5"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-33-1" />
      <feTurbulence
         id="feTurbulence13647-4-7-6"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-8-0"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-77-4"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-73-1"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-2-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-6-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-6-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-7-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-37-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-7-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-7-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-0-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-38-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-2-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-5-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-0-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-21-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-8-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-4-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-63-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-5-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-9-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-4-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-0-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-4-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-3-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-1-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-7-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-0-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-0-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-0-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-21-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-6-0" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-1-3">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-9-7" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-2-1" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-8-2" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-3-8" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-3-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-2-9" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-5-9" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-5-1"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-3-2" />
      <feTurbulence
         id="feTurbulence13647-4-0-9"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-4-5"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-7-0"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-7-0"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-4-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-5-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-0-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-3-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-3-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-2-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-6-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-2-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-3-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-3-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-9-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-9-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-2-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-7-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-3-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-6-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-3-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-8-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-6-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-4-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-1-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-3-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-8-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-8-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-2-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-8-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-4-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-6-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-2-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-8-4" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.7704811"
       y="-0.38524057"
       width="1.7546061"
       x="-0.37730303"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-0" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-7" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-4" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-2" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-9" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-99"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-3" />
      <feTurbulence
         id="feTurbulence13647-8"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-4"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-7"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-6"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-7-2-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-4-7-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-5-6-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-1-8-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-0-8-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-5-6-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-7-3-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-9-3-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-8-9-45" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-6-8-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-8-1-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-2-2-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-7-2-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-1-2-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-9-8-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-8-4-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-7-9-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-33-2-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-96-4-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-42-9-77" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-3-8-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-9-1-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-3-0-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-3-8-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-11-5-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-6-1-65" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-7-2-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-9-7-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-1-3-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-2-6-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-9-9-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-83-9-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-4-3-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-8-4-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-3-1-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-07-4-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-3-9-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-88-2-06" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-2-1-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-0-3-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-5-9-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-1-2-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-8-3-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-2-4-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-2-2-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-7-3-96">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-2-9-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-1-1-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-7-2-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-8-6-09" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-0-9-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-62-8-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-6-3-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-9-0-41" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-7-7-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-05-3-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-2-0-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-4-4-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-4-7-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-3-4-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-33" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-54" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-59" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-27" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-16" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-80" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-60">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-77" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-43-6-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-1-1-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-94-9-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-54-1-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-6-3-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-2-4-04" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-3-7-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-2-7-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-75-3-77" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-79-5-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-1-2-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-3-1-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-76-1-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-2-3-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-15-0-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-90-3-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-74-9-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-46-1-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-60-2-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-1-3-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-1-5-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-9-3-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-04-3-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-9-0-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-8-6-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-5-6-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-3-4-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-648-7-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-32-6-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-1-0-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-3-6-31">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-2-4-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-6-9-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-20-4-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-53-1-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-8-9-83" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-9-5-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-4-0-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-10-8-54" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-8-5-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-03-5-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-2-7-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-75-6-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-00-3-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-6-8-64" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-6-9-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-3-9-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-73-7-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-12-4-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-4-0-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-0-4-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-0-7-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-86-5-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-5-9-35" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-1-9-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-8-0-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-81-6-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-64-8-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-16-7-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-321-4-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-65-9-82">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-4-3-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-16-9-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-4-9-37" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-4-4-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-38-5-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-0-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-37-4-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-93-8-48" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-2-5-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-01-7-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-6-1-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-7-5-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-63-7-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-22-3-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-5-9-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-7-5-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-2-4-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-6-1-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-75-2-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-9-2-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-8-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-7-0-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-4-9-79" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-7-8-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-38-1-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-2-8-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-6-3-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-1-7-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-32-6-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-6-4-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-5-2-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-1-8-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-5-6-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-54-0-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-3-6-19" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-4-5-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-6-7-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-9-4-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-0-0-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-0-8-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-59-7-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-1-8-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-0-4-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-3-5-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-9-0-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-6-4-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-6-0-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-1-3-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-5-2-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-71-9-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-24-3-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-8-6-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-26-5-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-3-8-14">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-2-8-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-8-2-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-4-4-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-5-4-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-3-2-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6-71">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9-16" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5-97" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4-49" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9-74" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8-86" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-7-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-17-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-5-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-79-45" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-8-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-30-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-6-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-57-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-3-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-4-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-97-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-9-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-73-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-20-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-13-27" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-2-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-70-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-40-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-4-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-3-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-16-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-92-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-9-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-90-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-35-09">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-0-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-44-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-8-54" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-9-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-97-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-8-4-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-5-3-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-5-1-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-2-6-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-5-8-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-3-9-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-2-8-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-62-0-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-0-3-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-2-7-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-1-7-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-6-9-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-2-3-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-6-5-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-3-1-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-0-9-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-9-7-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-4-3-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-3-7-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-5-0-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-2-9-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-1-1-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-3-4-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-0-1-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-7-8-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-4-8-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-0-0-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-7-3-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-3-4-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-5-5-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-8-8-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-0-8-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-3-9-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-9-2-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-5-5-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-6-3-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-4-7-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-2-4-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-8-2-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-6-7-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-8-0-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-2-7-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-8-2-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-6-5-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-2-2-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-57" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-44" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-46" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-4-7-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-8-0-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-9-4-4" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-5-2-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-2-1-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-4-4-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-7-3-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-4-3-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-6-0-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-4-2-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-8-6-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-1-8-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-2-7-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-0-2-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-1-7-8" />
    </filter>
    <filter
       inkscape:collect="always"
       style="color-interpolation-filters:sRGB"
       id="filter15116-9"
       x="-2.0102774"
       width="5.0205548"
       y="-2.0872903"
       height="5.1745805">
      <feGaussianBlur
         inkscape:collect="always"
         stdDeviation="5.9993031"
         id="feGaussianBlur15118-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-3-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-82-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-1-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-1-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-44-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-5-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-9-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-9-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-32-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-5-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-7-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-2-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-5-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-64-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-0-2" />
    </filter>
    <filter
       inkscape:collect="always"
       style="color-interpolation-filters:sRGB"
       id="filter15108-6"
       x="-2.0102774"
       width="5.0205548"
       y="-2.0872903"
       height="5.1745805">
      <feGaussianBlur
         inkscape:collect="always"
         stdDeviation="5.9993031"
         id="feGaussianBlur15110-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-3-2-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-9-7-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-4-5-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-46-6-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-27-2-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-5-6-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-3-7-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-3-2-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-1-1-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-6-0-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-60-0-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-5-8-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-90-6-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-2-7-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-5-7-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-07-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-3-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-2-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-33-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-55-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-23-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-70-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-45-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-8-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-9-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-9-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-4-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-26-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-4-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-10-1" />
    </filter>
    <filter
       inkscape:collect="always"
       style="color-interpolation-filters:sRGB"
       id="filter15112-0"
       x="-2.0102774"
       width="5.0205548"
       y="-2.0872903"
       height="5.1745805">
      <feGaussianBlur
         inkscape:collect="always"
         stdDeviation="5.9993031"
         id="feGaussianBlur15114-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-9-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-02-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-68-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-2-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-8-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-1-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-91-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-8-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-3-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-0-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-5-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-28-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-6-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-3-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-5-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-5-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-7-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-18-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-1-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-6-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-6-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-1-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-7-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-50-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-1-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-57-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-4-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-1-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-18-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-60-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-9-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-3-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-3-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-8-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-8-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-5-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-0-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-8-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-6-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-0-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-2-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-1-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-7-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-1-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-0-4" />
    </filter>
    <filter
       inkscape:collect="always"
       style="color-interpolation-filters:sRGB"
       id="filter15104-8"
       x="-2.0102774"
       width="5.0205548"
       y="-2.0872903"
       height="5.1745805">
      <feGaussianBlur
         inkscape:collect="always"
         stdDeviation="5.9993031"
         id="feGaussianBlur15106-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-1-5-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-0-4-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-6-9-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-5-3-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-6-5-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-7-9-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-4-4-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-1-2-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-2-8-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-1-6-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-9-8-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-0-8-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-5-6-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-2-4-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-2-9-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-2-8-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-3-4-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-8-8-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-60-7-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-2-9-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-62-7-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-0-7-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-2-9-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-6-1-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-2-9-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-2-1-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-19-2-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-2-4-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-0-9-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-7-2-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="9.3501313"
       y="-4.1750656"
       width="9.0420439"
       x="-4.021022"
       style="color-interpolation-filters:sRGB"
       id="filter5829-4-6-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-9-5-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-4-6-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-6-3-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-8-4-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-6-6-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-2-3-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-4-5-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-9-5-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-6-1-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-7-2-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-1-2-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-9-9-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-9-2-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-1-1-5" />
    </filter>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4721"
       id="linearGradient4727-2-6"
       x1="557.85718"
       y1="695.93359"
       x2="590"
       y2="650.21936"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-131.38812,-65.97732)" />
    <filter
       inkscape:label="Film Grain"
       inkscape:menu="Image Effects"
       inkscape:menu-tooltip="Adds a small scale graininess"
       style="color-interpolation-filters:sRGB"
       id="filter13324-1"
       x="0"
       y="0"
       width="1"
       height="1">
      <feTurbulence
         type="fractalNoise"
         numOctaves="3"
         baseFrequency="1"
         seed="0"
         result="result0"
         id="feTurbulence13326-3" />
      <feColorMatrix
         result="result4"
         values="0"
         type="saturate"
         id="feColorMatrix13328-2" />
      <feComposite
         k4="0"
         in="SourceGraphic"
         in2="result4"
         operator="arithmetic"
         k1="1.25"
         k2="0.5"
         k3="0.5"
         result="result2"
         id="feComposite13330-5" />
      <feBlend
         result="result5"
         mode="normal"
         in="result2"
         in2="SourceGraphic"
         id="feBlend13332-6" />
      <feComposite
         in="result5"
         in2="SourceGraphic"
         operator="in"
         result="result3"
         id="feComposite13334-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6-7-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8-2-56" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2-3-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9-2-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9-1-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6-4-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8-8-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9-1-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2-4-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7-9-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7-9-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0-0-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9-2-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1-7-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3-6-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3-4-18">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5-9-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9-8-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2-3-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7-8-83" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6-3-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3-2-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4-4-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9-6-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6-1-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1-9-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8-5-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8-1-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8-2-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7-0-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-9-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-9-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-2-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-1-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-55-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-56-74" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-80-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-9-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-5-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-74-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-9-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-3-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-2-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-72-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-7-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-48-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-50-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-3-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-8-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-0-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-54-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-8-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-43-58" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-73-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-1-14" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-2-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-5-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-7-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-3-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-3-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-5-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-7-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-9-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-1-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-1-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-3-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-6-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-4-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-70-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-6-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-93-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-1-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-2-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-9-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-4-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-4-77" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-9-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-26-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-5-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-7-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-0-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-3-95" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-9-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-2-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-8-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-94-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-7-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-3-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-1-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-2-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-1-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-4-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-2-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-3-93" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-5-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-6-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-5-70" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-0-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-7-24">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-5-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-9-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-3-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-6-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-0-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-5-46">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-5-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-3-24" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-1-98" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-7-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-4-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-7-34" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-9-02" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-4-09" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-8-04">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-7-19" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-9-98" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-7-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-0-67" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-8-01" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-97-6-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-1-3-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-31-9-7" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-8-9-6" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-6-9-5" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-5-4-8" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-5-0-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-71-5-9" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-4-3-5"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-09-3-48" />
      <feTurbulence
         id="feTurbulence13647-4-4-16-3-9"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-7-5-2"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-85-3-7"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-63-8-3"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-52-9-7">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-7-0-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-2-9-6" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-4-5-1" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-7-8-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-6-6-07" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-4-2-8" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-6-9-5" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-1-2-3"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-93-4-3" />
      <feTurbulence
         id="feTurbulence13647-4-4-0-1-0"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-5-8-77"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-8-3-3"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-36-6-5"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-9-9-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-0-9-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-7-0-0" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-2-3-9" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-12-2-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-7-0-0" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-3-6-12" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-84-6-3" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-3-2-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-1-1-8" />
      <feTurbulence
         id="feTurbulence13647-4-4-5-7-6"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-49-8-9"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-3-4-0"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-8-7-1"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-5-1-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-5-9-2" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-0-4-3" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-90-6-9" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-8-9-1" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-4-2-6" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-2-3-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-7-8-1" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-9-4-0"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-2-2-6" />
      <feTurbulence
         id="feTurbulence13647-4-4-3-0-7"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-9-2-75"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-9-9-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-7-2-8"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-0-8">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-55-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-71-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-6-6" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-04-5" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-8-6" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-75-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-85-0" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-41-78"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-03-1" />
      <feTurbulence
         id="feTurbulence13647-4-4-2-0"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-41-4"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-68-5"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-5-8"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-97-2">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-1-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-31-2" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-8-7" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-6-47" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-5-3" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-5-4" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-71-1" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-4-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-09-9" />
      <feTurbulence
         id="feTurbulence13647-4-4-16-85"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-7-3"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-85-7"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-63-2"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-52-45">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-7-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-2-7" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-4-0" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-7-7" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-6-5" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-4-4" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-6-0" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-1-1"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-93-7" />
      <feTurbulence
         id="feTurbulence13647-4-4-0-7"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-5-4"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-8-5"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-36-9"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-9-0">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-0-1" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-7-8" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-2-5" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-12-9" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-7-8" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-3-66" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-84-2" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-3-4"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-1-8" />
      <feTurbulence
         id="feTurbulence13647-4-4-5-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-49-1"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-3-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-8-8"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-5-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-5-7" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-0-0" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-90-7" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-8-3" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-4-3" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-2-4" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-7-0" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-9-7"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-2-1" />
      <feTurbulence
         id="feTurbulence13647-4-4-3-8"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-9-8"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-9-8"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-7-7"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-16-3">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-3-9" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-3-8" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-7-9" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-1-3" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-0-5" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-6-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-8-05" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-0-5"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-0-9" />
      <feTurbulence
         id="feTurbulence13647-4-4-1-7"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-3-0"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-6-1"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-6-1"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-1-6">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-6-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-5-0" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-9-1" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-0-9" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-2-8" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-7-8" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-5-0" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-5-7"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-9-2" />
      <feTurbulence
         id="feTurbulence13647-4-4-4-4"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-4-6"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-0-6"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-3-2"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-74-44">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-5-31" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-6-4" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-0-25" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-2-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-2-66" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-28-0" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-1-4" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-9-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-81-7" />
      <feTurbulence
         id="feTurbulence13647-4-4-09"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-79-2"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-8-7"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-1-62"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-70-9">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-1-6" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-9-8" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-2-8" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-9-2" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-0-9" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-7-78" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-3-3" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-2-3"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-30-3" />
      <feTurbulence
         id="feTurbulence13647-4-5-8"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-3-7"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-5-85"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-8-0"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-1-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-0-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-9-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-9-86" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-6-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-29-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-4-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-8-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-0-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-29-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-7-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-3-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-1-5" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-6-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-6-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-7-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-1-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-0-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-5-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-9-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-42-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-2-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-9-15" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-2-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-9-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-5-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-1-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-7-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-3-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-7-66" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-7-4">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-8-7" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-8-9" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-3-79" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-0-7" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-5-05" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-6-0" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-6-8" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-8-6"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-33-0" />
      <feTurbulence
         id="feTurbulence13647-4-7-2"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-8-04"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-77-2"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-73-0"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-2-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-6-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-6-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-7-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-37-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-7-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-7-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-0-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-38-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-2-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-5-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-0-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-21-17" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-8-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-4-74" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-63-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-5-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-9-37" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-4-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-0-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-4-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-8-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-3-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-1-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-7-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-0-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-0-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-0-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-21-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-6-7" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-5-1-7">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-9-9-5" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-2-2-5" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-3-8-4" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-8-3-0" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-5-3-4" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-0-2-1" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-5-5-7" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-9-5-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-2-3-1" />
      <feTurbulence
         id="feTurbulence13647-4-0-6"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-6-4-1"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-1-7-3"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-1-7-1"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-1-4-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-6-5-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-5-0-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-5-3-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-7-3-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-2-2-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-2-6-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-1-2-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-1-3-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-6-3-61">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-86-9-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-7-9-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-8-2-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-0-7-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-2-3-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-3-6-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-97-3-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-50-8-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-6-6-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-9-4-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-9-1-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-7-3-89" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-9-8-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-8-8-47" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-8-2-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-8-8-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-10-4-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-2-6-2" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-1-2-37" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-9-8-3" />
    </filter>
    <filter
       inkscape:label="Roughen Inside"
       inkscape:menu="Distort"
       inkscape:menu-tooltip="Roughen all inside shapes"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter13515-4-56">
      <feGaussianBlur
         stdDeviation="5"
         result="result8"
         id="feGaussianBlur13517-3-3" />
      <feTurbulence
         seed="25"
         result="result7"
         type="turbulence"
         numOctaves="2"
         baseFrequency="0.03"
         id="feTurbulence13519-0-4" />
      <feComposite
         in2="result8"
         result="result6"
         operator="in"
         in="result8"
         id="feComposite13521-0-32" />
      <feDisplacementMap
         in="result7"
         in2="result6"
         xChannelSelector="A"
         yChannelSelector="A"
         scale="120"
         result="result4"
         id="feDisplacementMap13523-9-07" />
      <feComposite
         k4="0"
         in2="result4"
         result="result2"
         operator="arithmetic"
         in="SourceGraphic"
         k1="2"
         k3="2.5"
         k2="0.25"
         id="feComposite13525-5-8" />
      <feComposite
         result="fbSourceGraphic"
         in="result2"
         operator="in"
         in2="SourceGraphic"
         id="feComposite13527-7-6" />
      <feBlend
         mode="screen"
         in2="fbSourceGraphic"
         result="result91"
         id="feBlend13529-7-95" />
      <feBlend
         mode="multiply"
         in2="result91"
         id="feBlend13531-26-2"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix13645-39" />
      <feTurbulence
         id="feTurbulence13647-2"
         numOctaves="5"
         seed="0"
         type="fractalNoise"
         baseFrequency="0.08" />
      <feGaussianBlur
         id="feGaussianBlur13649-5"
         stdDeviation="0.5"
         result="result91" />
      <feDisplacementMap
         id="feDisplacementMap13651-0"
         in2="result91"
         scale="20"
         yChannelSelector="G"
         xChannelSelector="R"
         in="fbSourceGraphic"
         result="result1" />
      <feComposite
         id="feComposite13653-3"
         in2="fbSourceGraphic"
         in="result1"
         operator="atop" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-7-2-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-4-7-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-5-6-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-1-8-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-0-8-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-5-6-98" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-7-3-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-9-3-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-8-9-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-6-8-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-8-1-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-2-2-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-7-2-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-1-2-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-9-8-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-8-4-06">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-7-9-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-33-2-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-96-4-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-42-9-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-3-8-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-9-1-57" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-3-0-13" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-3-8-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-11-5-55">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-6-1-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-7-2-98" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-9-7-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-1-3-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-2-6-14" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-9-9-29">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-83-9-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-4-3-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-8-4-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-3-1-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-07-4-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-3-9-61" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-88-2-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-2-1-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-0-3-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-5-9-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-1-2-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-8-3-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-2-4-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-2-2-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-7-3-12">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-2-9-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-1-1-15" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-7-2-28" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-8-6-04" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-0-9-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-62-8-74" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-6-3-72" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-9-0-94" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-7-7-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-05-3-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-2-0-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-4-4-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-4-7-96" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-3-4-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-5-8-09">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-8-4-87" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-7-0-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-5-4-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-4-6-75" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-0-7-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-9-9-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-8-6-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-5-2-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-9-3-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-9-6-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-6-9-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-1-5-88" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-7-3-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-7-3-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-9-7-79">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-3-6-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-3-5-73" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-9-1-59" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-4-5-48" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-4-6-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-6-3-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-0-7-27" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-5-8-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-1-0-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-0-5-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-8-2-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-7-0-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-2-8-88" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-1-1-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-43-6-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-1-1-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-94-9-11" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-54-1-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-6-3-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-2-4-05" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-3-7-98" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-2-7-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-75-3-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-79-5-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-1-2-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-3-1-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-76-1-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-2-3-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-15-0-8" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-90-3-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-74-9-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-46-1-54" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-60-2-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-1-3-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-1-5-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-9-3-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-04-3-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-9-0-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-8-6-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-5-6-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-3-4-55" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-648-7-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-32-6-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-1-0-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-3" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-05">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-38" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-12" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-58" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-96" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-00">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-23" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-3-6-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-2-4-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-6-9-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-20-4-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-53-1-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-8-9-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-9-5-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-4-0-66" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-10-8-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-8-5-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-03-5-55" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-2-7-43" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-75-6-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-00-3-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-6-8-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-6-9-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-3-9-09" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-73-7-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-12-4-23" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-4-0-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-0-4-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-0-7-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-86-5-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-5-9-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-1-9-50">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-8-0-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-81-6-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-64-8-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-16-7-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-321-4-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-65-9-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-4-3-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-16-9-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-4-9-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-4-4-43" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-38-5-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-0-8-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-37-4-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-93-8-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-2-5-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-01-7-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-6-1-01" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-7-5-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-63-7-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-22-3-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-5-9-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-7-5-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-2-4-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-6-1-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-75-2-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-9-2-71" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-8-8-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-7-0-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-4-9-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-7-8-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-38-1-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-2-8-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-6-3-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-1-7-67" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-32-6-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-6-4-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-5-2-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-1-8-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-5-6-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-54-0-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-3-6-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-4-5-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-6-7-98" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-9-4-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-0-0-0">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-0-8-2" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-59-7-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-1-8-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-0-4-5" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-3-5-79" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-9-0-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-6-4-52" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-6-0-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-1-3-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-5-2-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-71-9-36" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-24-3-3" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-8-6-12" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-26-5-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-3-8-3">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-2-8-29" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-8-2-53" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-4-4-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-5-4-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-3-2-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-9-6-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-3-8-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-8-2-25" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-2-9-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-1-9-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-1-6-48" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-7-8-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-8-9-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-1-2-71" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-9-7-35">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-7-7-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-5-0-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-9-9-13" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-6-1-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-2-3-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-8-3-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-9-5-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-4-9-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-7-2-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-7-7-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-4-6-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-7-3-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-0-4-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-8-9-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-9-6-64">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-1-1-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-4-8-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-77-8-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-76-8-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-9-7-39" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7926-7-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-17-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-5-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-79-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-8-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-30-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-6-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-57-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-3-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-4-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-97-66" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-9-49" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-73-45" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-20-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-13-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter7896-2-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-70-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-40-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-4-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-3-41" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-16-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-92-98" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-9-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-90-66" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-35-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-0-60" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-44-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-8-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-9-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-97-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-8-4-73">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-5-3-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-5-1-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-2-6-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-5-8-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-3-9-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-2-8-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-62-0-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-0-3-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-2-7-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-1-7-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-6-9-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-2-3-08" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-6-5-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-3-1-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-0-9-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-9-7-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-4-3-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-3-7-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-5-0-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-2-9-45" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-1-1-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-3-4-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-0-1-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-7-8-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-4-8-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-0-0-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-7-3-86" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-3-4-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-5-5-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-8-8-53">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-0-8-3" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-3-9-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-9-2-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-5-5-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-6-3-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-4-7-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-2-4-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-8-2-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-6-7-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-8-0-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-2-7-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-8-2-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-6-5-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-2-2-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-7-9-6">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-8-6-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-4-8-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-8-5-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-4-6-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-8-1-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-4-7-70" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-6-9-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-3-9-3" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-1-5-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-4-7-70" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-7-0-96" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-9-8-12" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-1-3-08" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-6-9-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-4-7-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-8-0-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-9-4-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-5-2-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-2-1-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-4-4-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-7-3-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-4-3-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-6-0-73" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-4-2-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-8-6-24" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-1-8-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-2-7-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-0-2-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-1-7-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-6-3-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-0-82-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-13-1-3" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-8-1-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-7-44-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-4-5-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-8-9-33" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-8-9-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-5-32-38" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-80-5-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-34-7-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-51-2-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-2-5-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-78-64-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-3-0-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-3-2-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-9-7-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-4-5-18" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-46-6-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-27-2-4" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-5-6-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-3-7-21" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-3-2-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-1-1-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-6-0-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-60-0-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-5-8-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-90-6-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-2-7-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-5-7-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-7-07-33">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-1-3-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-3-2-68" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-0-33-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-5-55-00" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-8-23-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-5-70-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-4-45-3" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-0-8-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-2-9-39">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-5-9-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-0-4-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-9-26-9" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-14-4-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-9-10-6" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-0-9-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-3-02-17" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-1-68-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-4-2-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-2-8-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-7-1-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-9-91-42" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-9-8-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-9-3-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-8-0-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-3-5-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-8-28-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-5-6-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-1-3-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-6-5-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-1-5-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-5-7-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-9-18-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-4-1-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-5-6-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-4-6-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-8-1-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-2-7-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-7-50-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-8-1-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-6-57-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-2-4-17" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-6-1-6" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-8-18-05" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-1-60-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-06-9-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-1-3-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-7-3-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-600-8-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-68-8-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-4-5-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-79-0-96" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-8-8-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-02-6-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-3-0-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-5-2-13" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-51-1-1" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-4-7-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-29-1-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-4-0-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-1-5-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-0-4-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-6-9-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-5-3-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-6-5-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-7-9-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-4-4-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-1-2-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-2-8-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-1-6-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-9-8-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-0-8-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-5-6-81" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-2-4-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-2-9-96" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-2-8-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-3-4-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-8-8-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-60-7-1" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-2-9-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-62-7-70" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-0-7-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-2-9-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-6-1-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-2-9-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-2-1-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-19-2-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-2-4-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-0-9-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-7-2-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="1.5"
       y="-0.25"
       width="1.5"
       x="-0.25"
       style="color-interpolation-filters:sRGB"
       id="filter5829-4-6-11">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur5831-9-5-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence5833-4-6-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite5835-6-3-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap5837-8-4-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood5839-6-6-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite5841-2-3-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite5843-4-5-1" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur5845-9-5-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting5847-6-1-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight5849-7-2-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite5851-1-2-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite5853-9-9-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix5855-9-2-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend5857-1-1-4" />
    </filter>
    <filter
       inkscape:label="Film Grain"
       inkscape:menu="Image Effects"
       inkscape:menu-tooltip="Adds a small scale graininess"
       style="color-interpolation-filters:sRGB"
       id="filter13324-8">
      <feTurbulence
         type="fractalNoise"
         numOctaves="3"
         baseFrequency="1"
         seed="0"
         result="result0"
         id="feTurbulence13326-1" />
      <feColorMatrix
         result="result4"
         values="0"
         type="saturate"
         id="feColorMatrix13328-24" />
      <feComposite
         k4="0"
         in="SourceGraphic"
         in2="result4"
         operator="arithmetic"
         k1="1.25"
         k2="0.5"
         k3="0.5"
         result="result2"
         id="feComposite13330-6" />
      <feBlend
         result="result5"
         mode="normal"
         in="result2"
         in2="SourceGraphic"
         id="feBlend13332-64" />
      <feComposite
         in="result5"
         in2="SourceGraphic"
         operator="in"
         result="result3"
         id="feComposite13334-93" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-9" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-4">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-3" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-9">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-2" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-2" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-9" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-8" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-1" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-0">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-6" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-1" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-5" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-1" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-0" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-7" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-2">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-4" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-7" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-3">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-9" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-0" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-0" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-0" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-2" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-9" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-3" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-9" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-2" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-16" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-5" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-8" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-5">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-8" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-4" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-8">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-1" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-7" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-6" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-7" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-8" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-0" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-7">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-5" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-2" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-3" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-0" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-0" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-9" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-53" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-4" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-9" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-4" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-5" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-7" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-85" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-2" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-38">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-5" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-7" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-4" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-2" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-5" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-23" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-02" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-2" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-75">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-0" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-8" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-35" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-5" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-52">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-4" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-8" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-3" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-7" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-66" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-9" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-7" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-8" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-50" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-81" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-1" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-2">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-13" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-71" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-76" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-09" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-7" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-2" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-99" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-67">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-36" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-9" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-7" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-7">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-28" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-06" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-71" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-9" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-3" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-63" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-09" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-4" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-6">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-89" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-73" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-0" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-2" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-22" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-5">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-7" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-73" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-75" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-1" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-6" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-6" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-4" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-98" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-9">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-98" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-6" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-39" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-8" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-0" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-8" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-70" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-78" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-64" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-58" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-5" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-5" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-14">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-9" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-0" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-07" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-20" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-23" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-1">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-73" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-6" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-6" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-27" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-8" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-1" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-6" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-985" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-74">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-7" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-4" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-83" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-4" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-03" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.0610527"
       y="-0.53052633"
       width="1.5236364"
       x="-0.26181818"
       style="color-interpolation-filters:sRGB"
       id="filter7926-1-6-9-4-51">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7928-45-5-8-4-03" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7930-91-6-46-5-2" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7932-70-3-0-7-5" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7934-9-40-4-2-788" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7936-33-2-19-5-62" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7938-45-6-50-5-50" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7940-5-87-2-5-75" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7942-7-87-3-6-0" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7944-1-7-1-8-16">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7946-9-0-8-0-6" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7948-1-7-68-5-3" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7950-71-6-6-1-40" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7952-47-29-3-8-0" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7954-69-22-80-2-73" />
    </filter>
    <filter
       inkscape:menu-tooltip="3D warped, fibered wood texture"
       inkscape:menu="Materials"
       inkscape:label="3D Wood"
       height="2.4933334"
       y="-0.74666671"
       width="1.9163636"
       x="-0.45818181"
       style="color-interpolation-filters:sRGB"
       id="filter7896-7-2-9-2-17">
      <feGaussianBlur
         result="result8"
         stdDeviation="4"
         id="feGaussianBlur7898-4-1-1-14-91" />
      <feTurbulence
         baseFrequency="0.025 0.2"
         numOctaves="3"
         type="fractalNoise"
         result="result7"
         seed="22"
         id="feTurbulence7900-45-4-23-6-9" />
      <feComposite
         in2="result8"
         operator="in"
         in="SourceGraphic"
         result="result6"
         id="feComposite7902-79-5-18-8-74" />
      <feDisplacementMap
         in2="result6"
         result="result4"
         scale="50"
         yChannelSelector="A"
         xChannelSelector="A"
         in="result7"
         id="feDisplacementMap7904-9-1-1-8-61" />
      <feFlood
         flood-color="rgb(230,211,138)"
         flood-opacity="1"
         id="feFlood7906-3-1-8-6-81" />
      <feComposite
         in2="result4"
         operator="atop"
         result="result2"
         id="feComposite7908-04-3-8-95-4" />
      <feComposite
         in2="SourceGraphic"
         operator="atop"
         in="result2"
         result="result9"
         id="feComposite7910-6-7-9-7-021" />
      <feGaussianBlur
         result="result0"
         in="result9"
         stdDeviation="8"
         id="feGaussianBlur7912-51-99-9-5-6" />
      <feSpecularLighting
         specularExponent="15"
         specularConstant="0.69999999"
         surfaceScale="5"
         lighting-color="#ffffff"
         result="result1"
         in="result0"
         id="feSpecularLighting7914-32-8-0-9-1">
        <feDistantLight
           azimuth="235"
           elevation="50"
           id="feDistantLight7916-87-8-0-3-1" />
      </feSpecularLighting>
      <feComposite
         operator="in"
         result="result2"
         in="result1"
         in2="result9"
         id="feComposite7918-1-84-6-2-7" />
      <feComposite
         k4="0"
         k1="0"
         k3="0.5"
         k2="0.5"
         operator="arithmetic"
         result="result4"
         in="result9"
         in2="result2"
         id="feComposite7920-9-40-5-33-1" />
      <feConvolveMatrix
         order="3 3"
         kernelMatrix="2 0 0 0 2 0 0 0 -2 "
         targetX="2"
         targetY="2"
         result="result10"
         id="feConvolveMatrix7922-3-5-8-6-1" />
      <feBlend
         mode="multiply"
         in="result10"
         in2="result10"
         id="feBlend7924-5-7-7-0-79" />
    </filter>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.0220655"
     inkscape:cx="386.96149"
     inkscape:cy="414.357"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:window-width="1920"
     inkscape:window-height="1017"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:pagecheckerboard="0" />
  <g
     inkscape:label="cell"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-308.26772)"
     style="display:inline"
     @mouseenter="$emit('active', '')">
     >
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.81424;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       d="m 342.38065,171.99246 -21.75897,1.38428 -22.617,3.0642 c -8.25769,1.49597 -15.48139,3.78086 -23.54084,7.19755 l -21.88051,11.2379 c -5.72374,3.06646 -12.25279,6.93295 -17.56204,12.36704 -7.65249,4.79159 -11.23746,10.82627 -15.90172,16.40739 l -11.24435,16.53168 c -2.24349,6.34315 -6.32551,11.8405 -7.70731,19.01374 -2.10272,5.10012 -1.28995,11.4898 -2.16347,16.81941 l 2.64163,16.55725 5.87751,17.82383 c 2.44229,7.57993 12.586,23.03812 18.39479,30.01453 9.70724,9.10763 30.00839,20.28732 38.53903,24.83258 5.05514,2.65655 38.01843,12.10571 48.7118,12.82069 11.39814,2.50455 55.38596,-1.73583 71.66489,-6.57604 16.06914,-5.69519 34.66466,-10.8823 48.16625,-21.81062 12.90153,-11.23673 25.08204,-23.32944 31.3618,-38.52793 6.26269,-13.32857 12.86874,-29.822 12.25342,-42.92351 l -1.57166,-14.20458 -2.57019,-6.44178 -2.06525,-8.3348 -3.20989,-7.05804 -2.31204,-5.39992"
       id="path4180-2-6"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccc" />
    <ellipse
       ry="240.37463"
       rx="266.42773"
       cy="646.70105"
       cx="449.55063"
       id="path4147"
       style="fill:url(#linearGradient4311);fill-opacity:1;stroke:none;stroke-width:1.56902;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864" />
    <ellipse
       ry="206.201"
       rx="218.21794"
       cy="619.94641"
       cx="480.23264"
       id="path4147-3"
       style="fill:#e3d7f4;fill-opacity:0.847059;stroke:none;stroke-width:1.56902;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864" />
    <path
       sodipodi:nodetypes="sscssscssccssss"
       inkscape:connector-curvature="0"
       id="path4303"
       d="m 507.9977,825.90775 c -34.44192,-3.10198 -53.33865,-1.51482 -70.77619,-3.45775 -20.41119,-2.27424 -64.00337,-17.31728 -63.19652,-19.51539 0,0 13.99635,-30.27174 37.81934,-57.708 23.82298,-27.43627 75.87699,-88.89456 115.67564,-136.57393 39.79863,-47.6794 73.56294,-87.97345 75.03184,-89.54238 l 2.67069,-2.85255 4.39441,3.99903 c 4.45776,4.05667 11.14161,6.79863 38.24009,15.68753 21.34615,7.00199 -31.77092,13.3811 15.32352,15.46639 53.05872,4.05261 41.98187,82.78548 37.70501,103.53878 -18.22193,33.82719 -27.24191,57.31484 -44.4287,81.26333 -12.14688,16.92577 -30.54804,40.76314 -47.74168,52.7344 -15.17758,10.56754 -9.58861,21.50889 -42.1677,28.99278 -24.09172,5.53417 -32.8511,10.2823 -58.54975,7.96776 z"
       style="fill:url(#linearGradient8756);fill-opacity:1;stroke:none;stroke-width:1.49431;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="cccccccccccccccccccccccc"
       inkscape:connector-curvature="0"
       id="path4180"
       d="m 531.06934,418.9783 -34.45709,-4.59378 -36.8566,-1.47001 c -13.60406,0.22981 -25.88609,2.41466 -39.92799,6.61504 L 380.939,434.92003 c -10.22242,4.28354 -22.02711,9.91879 -32.521,19.15466 -13.93739,7.13283 -21.9473,18.17595 -31.48169,27.93012 l -24.18714,29.76764 c -6.01534,12.1265 -14.59901,21.90856 -19.58007,36.01514 -5.30778,9.64843 -6.52259,22.90957 -9.982,33.44265 l -2.30354,34.54515 2.30355,38.22016 c 0.88938,16.2344 14.8747,49.99664 21.30772,66.15028 11.74696,21.81118 37.65984,47.02823 49.33409,59.16776 6.93243,7.11871 54.63716,30.37192 71.21772,35.4639 19.82451,4.05265 79.6673,13.92928 118.44022,9.92254 33.32556,-4.72519 39.93727,-2.5913 65.45886,-20.21259 24.73135,-18.44376 45.78088,-33.91106 61.61963,-62.65901 15.08134,-24.95386 38.2752,-62.83726 46.45467,-86.91413 l 6.52669,-23.33635 1.91962,-15.06757 v -17.64007 l -2.30353,-15.43507 -1.5357,-11.76005"
       style="fill:none;fill-rule:evenodd;stroke:#6857b2;stroke-width:5.20586;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.839216" />
    <path
       sodipodi:nodetypes="ccccccccsccsscccccccccc"
       inkscape:connector-curvature="0"
       id="path4184"
       d="m 530.75081,418.42971 c 0.89138,0.5047 6.06572,4.75714 6.1283,6.05428 l 1.75201,4.34498 6.51503,16.78722 4.88627,14.68881 7.60087,19.93481 4.88626,13.11502 2.7146,12.0658 c 0,0 0.54292,9.96742 2.7146,13.63962 2.17167,3.6722 3.80043,11.5412 3.80043,11.5412 l 2.71459,7.34441 c 0,0 2.60798,4.65435 4.34335,6.29521 1.40388,1.32741 5.6104,5.45604 7.60086,6.2952 1.97973,0.83463 15.74466,5.7706 15.74466,5.7706 l 15.74465,4.19681 c 4.5815,1.8241 11.38484,4.6342 18.45924,5.7706 4.48796,1.33213 10.38786,2.26325 10.45118,1.96725 l 11.26557,-0.39344 24.97427,2.0984 11.94421,-0.2623 c 1.95062,0.2811 4.07903,-0.29675 5.70066,1.5738 0.80221,0.74649 1.45961,2.05265 1.90021,4.1968 l 0.27146,3.6722"
       style="fill:none;fill-rule:evenodd;stroke:#6857b2;stroke-width:5.23007;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.839216" />
    <path
       sodipodi:nodetypes="cccccccccccccccccccccccc"
       inkscape:connector-curvature="0"
       id="path4180-2"
       d="m 532.63224,416.68577 -35.14124,-4.68548 -37.1673,-1.5 c -13.71876,0.23449 -26.10433,2.46392 -40.26459,6.75001 l -39.21651,15.70451 c -10.3086,4.37096 -22.21281,10.12118 -32.79516,19.54551 -14.05489,7.27837 -22.13232,18.54682 -31.74709,28.50001 l -24.39103,30.37503 c -6.06606,12.37395 -14.72209,22.3556 -19.74514,36.75003 -5.35253,9.8453 -6.57758,23.37702 -10.06615,34.12502 l -2.32296,35.25003 2.32296,39.00003 c 0.89688,16.56565 10.93493,52.1418 17.42218,68.62505 11.84599,22.25623 39.71954,52.48781 51.49221,64.87504 6.99087,7.26398 55.67849,38.30415 72.39882,43.50003 17.13587,9.15143 88.74529,15.63363 116.53502,11.25002 27.793,-6.22933 59.40268,-10.52782 85.17508,-28.50003 24.93985,-18.8201 49.07051,-39.66551 65.0428,-69.00004 15.20847,-25.46304 32.20973,-57.36943 36.39298,-84.75007 l 3.09728,-30.00002 -1.54864,-14.25001 v -18.00001 l -2.32295,-15.75002 -1.54864,-12.00001"
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:1.50881;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" />
    <path
       sodipodi:nodetypes="ccccccccsccsscccccccccc"
       inkscape:connector-curvature="0"
       id="path4184-5"
       d="m 532.04171,416.6027 c 0.8914,0.50004 7.02561,5.2697 7.08819,6.55488 l 1.75206,4.30493 6.51518,16.63246 4.88639,14.55339 7.60105,19.75103 4.88638,12.99411 2.71467,11.95456 c 0,0 0.54293,9.87553 2.71466,13.51388 2.17173,3.63834 3.80052,11.4348 3.80052,11.4348 l 2.71466,7.2767 c 0,0 2.60805,4.61144 4.34345,6.23717 1.40391,1.31517 5.61054,5.40575 7.60105,6.23717 1.97977,0.82694 15.74503,5.7174 15.74503,5.7174 l 15.74503,4.15812 c 4.58161,1.80728 11.38512,4.59147 18.45968,5.7174 4.48808,1.31984 10.38812,2.24238 10.45144,1.94911 l 11.26584,-0.38982 24.97487,2.07906 11.9445,-0.25988 c 1.95066,0.2785 4.07913,-0.29401 5.70079,1.55929 0.80224,0.73962 1.45966,2.03373 1.90026,4.15811 l 0.27147,3.63835"
       style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1.48742;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.839216" />
    <path
       sodipodi:nodetypes="ccccccccccccccccc"
       inkscape:connector-curvature="0"
       id="path4172"
       d="m 534.39291,411.75316 6.22175,16.47162 13.22123,33.69195 6.99947,18.71774 5.44405,20.96389 6.99946,26.95356 4.66633,11.23065 c 2.41938,5.09451 6.46482,8.87968 13.22123,10.48194 l 15.55439,4.49226 c 8.03644,2.24613 15.25849,5.01686 23.29493,7.26299 5.44207,1.38346 11.32299,3.21012 20.25737,3.96766 h 21.77615 l 32.66422,3.74355 -3.11088,-45.67131 -29.55334,-105.56811 -62.21757,-21.71259 z"
       style="fill:#ffffff;fill-rule:evenodd;stroke:none;stroke-width:0.747153px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="cccccccccccccccccccccccc"
       inkscape:connector-curvature="0"
       id="path4180-4"
       d="m 531.77099,417.07908 -34.90111,-4.63681 -37.33154,-1.48378 c -13.77937,0.23196 -26.21967,2.43728 -40.4425,6.67701 l -39.38979,15.53466 c -10.35415,4.32366 -22.31096,10.01169 -32.94007,19.33409 -14.11699,7.19965 -22.23012,18.34622 -31.88736,28.19177 L 290.3798,510.7425 c -6.09285,12.24012 -14.78714,22.1138 -19.83238,36.35254 -5.37618,9.73882 -6.60665,23.12418 -10.11063,33.75594 l -2.33323,34.86876 2.33324,38.5782 c 0.90084,16.38649 15.06637,50.465 21.58229,66.76998 11.89833,22.01549 38.14512,47.46878 49.96981,59.72202 7.02177,7.18541 55.34122,30.65645 72.13543,35.7961 20.07998,4.09064 80.69393,14.05982 119.96647,10.01552 33.755,-4.76946 40.45191,-2.6156 66.30237,-20.40193 25.05005,-18.61655 46.37082,-34.22875 62.41366,-63.246 15.27569,-25.18763 38.76843,-63.42591 47.05331,-87.72833 l 6.61078,-23.55495 1.94436,-15.20872 V 598.6563 l -2.33321,-15.57967 -1.55548,-11.87021"
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.751965;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="cccccccccccccccccccccccc"
       inkscape:connector-curvature="0"
       id="path4180-4-1"
       d="m 530.63283,420.9576 -34.05442,-4.54409 -36.42591,-1.45412 c -13.44509,0.22731 -25.5836,2.38854 -39.46139,6.54349 l -38.43423,15.22404 c -10.10295,4.23722 -21.76971,9.8115 -32.14096,18.9475 -13.77452,7.05568 -21.69083,17.97937 -31.1138,27.62806 l -23.90449,29.44569 c -5.94505,11.99536 -14.42842,21.67163 -19.35126,35.62565 -5.24576,9.54408 -6.44638,22.6618 -9.86536,33.08096 l -2.27662,34.17154 2.27663,37.80682 c 0.87899,16.05883 14.70088,49.45592 21.05872,65.43487 11.60969,21.57528 37.21976,46.5196 48.75759,58.52785 6.85142,7.04172 53.99869,30.04346 70.38547,35.08032 19.59286,4.00886 78.73633,13.77872 117.05617,9.81524 32.93612,-4.67407 39.47057,-2.56325 64.69392,-19.99395 24.44234,-18.2443 45.24588,-33.54433 60.89955,-61.98136 14.9051,-24.684 37.82793,-62.15768 45.91181,-85.97416 l 6.45042,-23.08395 1.89718,-14.90462 v -17.4493 l -2.27661,-15.26814 -1.51774,-11.63287"
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.735328;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="ccccccccsccsscccccccc"
       inkscape:connector-curvature="0"
       id="path4184-4"
       d="m 532.8138,416.95179 c 0.89137,0.5047 6.06571,4.75715 6.12829,6.05428 l 1.75202,4.34499 6.51502,16.78722 4.88627,14.68881 7.60087,19.93481 4.88627,13.11501 2.71459,12.06581 c 0,0 0.54292,9.96741 2.7146,13.63961 2.17167,3.67221 3.80043,11.54121 3.80043,11.54121 l 2.71459,7.3444 c 0,0 2.60798,4.65436 4.34335,6.29521 1.40388,1.32741 5.6104,5.45605 7.60087,6.29521 1.97972,0.83463 15.74465,5.7706 15.74465,5.7706 l 15.74465,4.19681 c 4.5815,1.8241 11.38484,4.63419 18.45924,5.7706 4.48796,1.33213 10.38786,2.26324 10.45119,1.96725 l 11.26556,-0.39345 24.97427,2.0984 11.94421,-0.2623 c 6.66934,1.03392 7.35593,3.51554 7.87233,9.44281"
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.747153;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="ccccccccsccsscccccccc"
       inkscape:connector-curvature="0"
       id="path4184-4-4"
       d="m 529.54044,421.34704 c 0.89137,0.5047 6.06572,4.75714 6.12829,6.05428 l 1.75202,4.34498 6.51503,16.78722 4.88626,14.68881 7.60087,19.93481 4.88627,13.11502 2.71459,12.0658 c 0,0 0.54293,9.96742 2.7146,13.63962 2.17167,3.6722 3.80043,11.5412 3.80043,11.5412 l 2.7146,7.34441 c 0,0 2.60797,4.65435 4.34334,6.29521 1.40388,1.32741 5.61041,5.45604 7.60087,6.2952 1.97973,0.83463 15.74465,5.7706 15.74465,5.7706 l 15.74466,4.19681 c 4.5815,1.8241 11.38484,4.6342 18.45924,5.7706 4.48796,1.33213 10.38786,2.26325 10.45119,1.96725 l 11.26556,-0.39344 24.97427,2.0984 11.94421,-0.2623 c 1.95062,0.2811 4.19829,-0.75771 5.81992,1.11284"
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.747153;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.81424;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       d="m 558.45677,1013.7998 -21.75897,1.3842 -22.617,3.0642 c -8.25769,1.496 -15.48139,3.7809 -23.54084,7.1976 l -21.88051,11.2379 c -5.72374,3.0664 -12.25279,6.9329 -17.56204,12.367 -7.65249,4.7916 -11.23746,10.8263 -15.90172,16.4074 l -11.24435,16.5317 c -2.24349,6.3431 -6.32551,11.8405 -7.70731,19.0137 -2.10272,5.1002 -1.28995,11.4898 -2.16347,16.8194 l 2.64163,16.5573 5.87751,17.8238 c 2.44229,7.58 12.586,23.0381 18.39479,30.0146 9.70724,9.1076 30.00839,20.2873 38.53903,24.8325 5.05514,2.6566 38.01843,12.1057 48.7118,12.8207 11.39814,2.5046 55.38596,-1.7358 71.66489,-6.576 16.06914,-5.6952 34.66466,-10.8823 48.16625,-21.8106 12.90153,-11.2368 25.08204,-23.3295 31.3618,-38.528 6.26269,-13.3285 12.86874,-29.822 12.25342,-42.9235 l -1.57166,-14.2046 -2.57019,-6.4417 -2.06525,-8.3348 -3.20989,-7.0581 -2.31204,-5.3999"
       id="path4180-2-6-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccc" />
    <ellipse
       style="opacity:1;fill:#4400aa;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter13324-1)"
       id="path4147-30-9"
       cx="285.8887"
       cy="627.66107"
       rx="148.02292"
       ry="133.36086"
       transform="matrix(0.86073163,0,0,0.73879529,239.25402,157.13278)" />
    <ellipse
       style="opacity:0.659;fill:#c6afe9;fill-opacity:0.847059;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864"
       id="path4147-3-4-6"
       cx="499.3548"
       cy="607.4762"
       rx="105.70514"
       ry="84.115753" />
    <ellipse
       style="opacity:1;fill:url(#linearGradient4727-2-6);fill-opacity:1;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864"
       id="path4656-8-2"
       cx="421.698"
       cy="618.03857"
       rx="24.642859"
       ry="22.857141"
       inkscape:transform-center-x="-5.0507627"
       inkscape:transform-center-y="20.203051" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 577.91766,570.77426 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-9-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc" />
    <ellipse
       style="opacity:1;fill:#93ac9d;fill-opacity:1;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter15104-8)"
       id="path4299-39-4-5-0-3-6-3"
       cx="495.02118"
       cy="588.19849"
       rx="3.5811791"
       ry="3.4490476" />
    <ellipse
       style="opacity:1;fill:#93ac9d;fill-opacity:1;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter15112-0)"
       id="path4299-39-4-5-0-8-0-8-2-6"
       cx="455.61005"
       cy="624.2688"
       rx="3.5811791"
       ry="3.4490476" />
    <ellipse
       style="opacity:1;fill:#93ac9d;fill-opacity:1;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter15108-6)"
       id="path4299-39-4-5-0-8-0-0-0-7"
       cx="459.14557"
       cy="609.62158"
       rx="3.5811791"
       ry="3.4490476" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 567.70428,554.49746 c 19.9321,4.3771 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9434 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-4-7-7-2"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6857b2;stroke-width:2.30684;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.839216"
       d="m 522.54181,525.29346 -16.50686,-1.8829 -17.65636,-0.6025 c -6.5171,0.094 -12.40089,0.9897 -19.12774,2.7114 l -18.62983,6.3083 c -4.89711,1.7558 -10.55221,4.0656 -15.57937,7.8513 -6.67679,2.9236 -10.51398,7.45 -15.08148,11.4481 l -11.58699,12.2013 c -2.88168,4.9705 -6.99373,8.9801 -9.37994,14.7622 -2.54272,3.9547 -3.12469,9.3903 -4.78194,13.7076 l -1.10352,14.1596 1.10353,15.6659 c 0.42606,6.6543 7.1258,20.4929 10.20759,27.1141 5.62744,8.9401 18.04115,19.2762 23.63378,24.252 3.32102,2.9179 26.17423,12.4491 34.11725,14.5362 9.49704,1.6611 38.16507,5.7094 56.73945,4.0671 15.96481,-1.9368 19.13218,-1.0621 31.35844,-8.2848 11.8477,-7.5599 23.48936,-15.9962 32.05062,-25.038 10.68565,-9.8188 9.97748,-13.9817 15.63383,-24.1747 l 7.2158,-21.6605 0.9196,-6.176 v -7.2304 l -1.10352,-6.3267 -0.73567,-4.8203"
       id="path4180-0-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6857b2;stroke-width:2.31757;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.839216"
       d="m 522.38922,525.06866 c 0.42702,0.2068 2.90582,1.9498 2.9358,2.4815 l 0.83931,1.781 3.12106,6.8808 2.3408,6.0208 3.64123,8.171 2.3408,5.3756 1.30044,4.9456 c 0,0 0.2601,4.0855 1.30045,5.5907 1.04034,1.5052 1.82061,4.7306 1.82061,4.7306 l 1.30044,3.0104 c 0,0 1.24937,1.9077 2.08071,2.5803 0.67254,0.5441 2.68769,2.2363 3.64124,2.5803 0.94839,0.3421 7.54256,2.3653 7.54256,2.3653 l 7.54257,1.7202 c 2.19479,0.7477 5.45397,1.8995 8.843,2.3653 2.14999,0.546 4.97637,0.9277 5.0067,0.8063 l 5.39683,-0.1612 11.96407,0.8601 5.72195,-0.1075 c 0.93445,0.1152 1.95407,-0.1217 2.73093,0.645 0.3843,0.306 0.69923,0.8414 0.91031,1.7203 l 0.13003,1.5052"
       id="path4184-1-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsccsscccccccccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.668588;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       d="m 523.29053,524.35376 -16.83461,-1.9205 -17.80521,-0.6148 c -6.57205,0.096 -12.50542,1.0099 -19.28898,2.7667 l -18.78689,6.4371 c -4.93839,1.7916 -10.64118,4.1485 -15.7107,8.0115 -6.73308,2.9832 -10.60262,7.602 -15.20863,11.6817 l -11.68466,12.4503 c -2.90598,5.0719 -7.05271,9.1632 -9.45902,15.0633 -2.56416,4.0355 -3.15103,9.5819 -4.82226,13.9874 l -1.11282,14.4485 1.11283,15.9855 c 0.42966,6.7901 5.23844,21.3723 8.3462,28.1285 5.67488,9.1225 19.02787,21.514 24.66763,26.5914 3.34901,2.9774 26.6731,15.7003 34.68307,17.83 8.20904,3.7511 42.51394,6.4081 55.82676,4.6113 13.3144,-2.5533 28.45719,-4.3152 40.80361,-11.6818 11.94757,-7.7141 23.5075,-16.2583 31.15911,-28.2821 7.28571,-10.437 15.43027,-23.515 17.43426,-34.7379 l 1.48377,-12.2966 -0.74186,-5.8409 v -7.3779 l -1.11284,-6.4558 -0.74187,-4.9186"
       id="path4180-2-9-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1.99078;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.839216"
       d="m 523.00763,524.31976 c 0.42704,0.2049 3.36566,2.16 3.39564,2.6868 l 0.83933,1.7645 3.12114,6.8174 2.34085,5.9652 3.64133,8.0957 2.34084,5.3261 1.30048,4.9 c 0,0 0.2601,4.0479 1.30047,5.5392 1.04039,1.4913 1.82067,4.6869 1.82067,4.6869 l 1.30048,2.9827 c 0,0 1.24939,1.8901 2.08075,2.5565 0.67255,0.539 2.68776,2.2157 3.64132,2.5565 0.94842,0.339 7.54275,2.3435 7.54275,2.3435 l 7.54274,1.7043 c 2.19485,0.7408 5.45411,1.882 8.84322,2.3435 2.15004,0.541 4.97648,0.9191 5.00682,0.7989 l 5.39696,-0.1598 11.96436,0.8522 5.72207,-0.1065 c 0.93449,0.1142 1.95414,-0.1205 2.73101,0.6391 0.38433,0.3032 0.69925,0.8336 0.91034,1.7044 l 0.13003,1.4913"
       id="path4184-5-5-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsccsscccccccccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.333215;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 522.87795,525.11706 -16.71958,-1.9005 -17.88388,-0.6082 c -6.60109,0.095 -12.56069,0.999 -19.37422,2.7368 l -18.8699,6.3674 c -4.96021,1.7723 -10.68819,4.1037 -15.78013,7.9248 -6.76282,2.951 -10.64946,7.5199 -15.27582,11.5554 l -11.7363,12.3157 c -2.91881,5.017 -7.08387,9.0641 -9.50082,14.9004 -2.57548,3.9918 -3.16495,9.4782 -4.84355,13.8361 l -1.11775,14.2922 1.11775,15.8126 c 0.43155,6.7166 7.21764,20.6849 10.33913,27.3681 5.69996,9.0239 18.27363,19.4568 23.93832,24.4793 3.36382,2.9452 26.51152,12.5656 34.55689,14.6723 9.61943,1.6767 38.65688,5.7629 57.47062,4.1052 16.17052,-1.9549 19.37871,-1.0721 31.76253,-8.3625 12.00036,-7.6306 21.82475,-14.6749 31.84683,-25.4398 9.45983,-10.4853 12.34115,-13.4183 17.86783,-28.7015 l 5.89303,-17.3958 0.93147,-6.2338 v -7.2982 l -1.11775,-6.3859 -0.74515,-4.8654"
       id="path4180-4-9-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.331081;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 523.37751,524.46286 c 0.42701,0.2069 2.90581,1.9499 2.93579,2.4816 l 0.83932,1.7809 3.12105,6.8809 2.3408,6.0207 3.64123,8.171 2.3408,5.3757 1.30044,4.9456 c 0,0 0.26009,4.0855 1.30045,5.5906 1.04035,1.5052 1.82062,4.7306 1.82062,4.7306 l 1.30043,3.0104 c 0,0 1.24937,1.9077 2.08071,2.5803 0.67253,0.5441 2.6877,2.2364 3.64124,2.5803 0.9484,0.3421 7.54257,2.3653 7.54257,2.3653 l 7.54256,1.7202 c 2.1948,0.7477 5.45398,1.8995 8.843,2.3653 2.14998,0.546 4.97637,0.9277 5.00671,0.8063 l 5.39683,-0.1612 11.96406,0.8601 5.72194,-0.1075 c 3.195,0.4238 3.52391,1.441 3.7713,3.8705"
       id="path4184-4-6-9"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsccsscccccccc" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.331081;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 521.80938,526.26436 c 0.42703,0.2069 2.90582,1.9499 2.9358,2.4816 l 0.83931,1.7809 3.12107,6.8809 2.34079,6.0207 3.64123,8.171 2.3408,5.3757 1.30044,4.9456 c 0,0 0.2601,4.0855 1.30044,5.5907 1.04036,1.5052 1.82062,4.7306 1.82062,4.7306 l 1.30045,3.0103 c 0,0 1.24936,1.9078 2.0807,2.5804 0.67254,0.544 2.6877,2.2363 3.64124,2.5803 0.9484,0.3421 7.54256,2.3652 7.54256,2.3652 l 7.54257,1.7203 c 2.19479,0.7477 5.45398,1.8995 8.84301,2.3653 2.14998,0.546 4.97636,0.9276 5.00669,0.8063 l 5.39684,-0.1613 11.96407,0.8602 5.72194,-0.1076 c 0.93446,0.1153 2.01121,-0.3105 2.78807,0.4562"
       id="path4184-4-4-1-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccsccsscccccccc" />
    <path
       style="fill:#e5d5ff;fill-opacity:0.971591;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 524.98431,522.4066 c 6.83959,14.79473 12.70209,25.89073 12.70209,25.89073 l 3.90833,11.09599 0.48853,5.75351 2.93125,6.16441 3.41979,4.52067 7.32813,2.8767 8.79376,2.8768 9.77082,2.46579 12.21354,1.23284 H 597.777 l 9.77083,0.41102 h 0.9771 L 596.8768,572.04852 c 0,0 -11.10751,-16.97347 -13.06167,-18.20631 -1.95417,-1.23295 -20.09882,-13.43792 -20.09882,-13.43792 0,0 -17.72472,-13.88804 -22.12158,-14.70997 -4.39688,-0.82193 -16.61042,-3.28772 -16.61042,-3.28772 z"
       id="path13336-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccccccccccccccccsc" />
    <path
       style="opacity:0.193;fill:#442178;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 512.55936,696.74116 c -15.74101,-1.3513 -24.37738,-0.6599 -32.34686,-1.5063 -9.32853,-0.9907 -29.25146,-7.5439 -28.88271,-8.5014 0,0 6.39676,-13.1872 17.28458,-25.1392 10.88781,-11.952 34.67807,-38.725 52.86724,-59.4954 18.18918,-20.7705 25.01872,-26.8465 25.01872,-26.8465 l 7.7663,2.1624 6.37219,2.715 c 2.56446,1.0926 30.63027,6.4043 43.65972,7.8067 0,0 2.45464,-0.9728 2.20782,6.2956 3.79407,9.0618 -0.85925,20.7082 -5.79146,28.035 -4.67612,14.3946 -7.6453,24.9679 -15.50018,35.4005 -5.55149,7.3733 -17.42103,17.7575 -25.27905,22.9726 -6.9366,4.6035 -1.30703,8.1746 -16.19664,11.4348 -11.01065,2.4108 -19.43462,5.6745 -31.17967,4.6662 z"
       id="path4303-3-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="sscssccssccssss" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;line-height:0%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       x="498.21429"
       y="343.07651"
       id="text21078"><tspan
         sodipodi:role="line"
         id="tspan21080"
         x="498.21429"
         y="343.07651"
         style="font-size:40px;line-height:1.25"> </tspan></text>
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer6"
     inkscape:label="chromatin"
     style="display:inline"
     @mouseenter="$emit('active', 'ChIPseq')">
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-5-2)"
       id="path4299-39-4-5-0-8-0-4-8"
       cx="468.237"
       cy="608.10632"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-0-9-7)"
       id="path4299-39-4-5-0-8-0-6-2-9"
       cx="462.68115"
       cy="603.05554"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-3-1)"
       id="path4299-39-4-5-0-8-0-63-1-0"
       cx="466.72174"
       cy="625.78394"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#6800b2;stroke-width:0.325841;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 522.3327,526.10476 -16.31396,-1.8625 -17.45004,-0.5961 c -6.44095,0.093 -12.25596,0.9791 -18.9042,2.6821 l -18.41214,6.2401 c -4.83988,1.7368 -10.4289,4.0217 -15.39731,7.7664 -6.59876,2.892 -10.39112,7.3694 -14.90524,11.3243 l -11.45158,12.0694 c -2.84802,4.9167 -6.91202,8.8829 -9.27033,14.6025 -2.51302,3.9119 -3.08818,9.2887 -4.72606,13.5594 l -1.09063,14.0064 1.09063,15.4965 c 0.42108,6.5823 7.04255,20.2713 10.0883,26.8208 5.56169,8.8435 17.83034,19.0678 23.3576,23.9898 3.28221,2.8863 25.86838,12.3144 33.71856,14.3789 9.38607,1.6432 37.71909,5.6477 56.07643,4.0232 15.77823,-1.9159 18.9086,-1.0507 30.99199,-8.1953 11.70924,-7.478 21.6753,-14.5557 31.51093,-25.0827 8.89286,-8.1824 12.66949,-16.769 17.12628,-27.4987 l 5.62148,-17.5253 0.90885,-6.1092 v -7.1522 l -1.09062,-6.2582 -0.72708,-4.7681"
       id="path4180-4-1-0-2"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="cccccccccccccccccccccccc"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-5-2-3)"
       id="path4299-39-4-5-0-8-0-63-5-2-8-4-5"
       cx="463.49658"
       cy="645.55823"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#91196d;stroke-width:2.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.948864"
       d="m 558.32627,633.17437 c -0.98386,-0.63062 -1.9199,-1.40152 -2.95158,-1.89196 -0.38316,-0.18212 -0.82169,-0.0647 -1.23254,-0.097 -1.02714,-0.0808 -2.05425,-0.16164 -3.08136,-0.24246 -1.43798,-0.11314 -2.87595,-0.22629 -4.31392,-0.33943 -0.27754,-0.0218 -1.65139,-0.25623 -1.84882,-0.14548 -0.27353,0.15342 -0.42248,0.57965 -0.68116,0.77626 -0.40903,0.31098 -0.88844,0.4169 -1.29746,0.72777 -0.25869,0.19671 -0.45411,0.51757 -0.68117,0.77636 -0.90473,1.03101 -1.69334,1.61314 -2.1084,3.15363 -0.14157,0.52562 -0.0865,1.0997 -0.12979,1.6495 -0.0216,0.27495 0.0464,0.58615 -0.0649,0.82475 -0.15731,0.3376 -0.58103,0.40467 -0.68118,0.77636 -0.21242,0.78837 -0.12979,1.6495 -0.19469,2.47435 -0.0433,0.54981 -0.0865,1.09971 -0.12979,1.64951 -0.0238,0.30286 -0.23215,3.26786 -0.25959,3.2991 -0.32109,0.36594 -0.91142,-0.46292 -1.23255,-0.097 -0.16054,0.18297 -0.0433,0.5498 -0.0649,0.82475 -0.22706,0.25878 -0.42247,0.57964 -0.68118,0.77636 -0.40903,0.31087 -0.86495,0.48514 -1.29742,0.72777 -0.43249,0.24262 -0.84639,0.56765 -1.29746,0.72776 -0.83174,0.29527 -1.73252,0.18347 -2.52998,0.63079 -0.54706,0.30694 -0.90824,1.03505 -1.36234,1.55262 -0.86496,0.48515 -1.70599,1.06607 -2.5949,1.45564 -0.53477,0.23427 -2.64716,-0.48605 -3.08137,-0.24246 -0.1934,0.10847 0.12853,0.71619 -0.0649,0.82475 -0.38682,0.21693 -0.82169,-0.0647 -1.23254,-0.097 -1.43797,-0.11314 -2.87595,-0.22629 -4.31391,-0.33943 -1.6434,-0.12931 -3.28679,-0.25862 -4.93019,-0.38793 -0.41085,-0.0323 -0.82169,-0.0647 -1.23254,-0.097 -0.20543,-0.0162 -0.42225,0.034 -0.61627,-0.0485 -0.61364,-0.26044 -1.16034,-0.74963 -1.78394,-0.97023 -0.39439,-0.13957 -0.85645,0.10755 -1.23255,-0.097 -0.26593,-0.14471 -0.36756,-0.58223 -0.55137,-0.87334 -0.36757,-0.58213 -0.73516,-1.16436 -1.10274,-1.74649 -1.28654,-2.03769 -2.5731,-4.07529 -3.85963,-6.11289 -0.73518,-1.16435 -1.40285,-2.41157 -2.20551,-3.49307 -0.5116,-0.68935 -1.33702,-0.96705 -1.71903,-1.79507 -0.2119,-0.45924 0.0865,-1.0997 0.12979,-1.6495 0.10816,-1.37465 0.21633,-2.7493 0.32449,-4.12396 0.0216,-0.27485 0.0433,-0.5498 0.0649,-0.82475 0.0216,-0.27495 -0.0956,-0.64178 0.0649,-0.82475 0.16056,-0.18297 0.41086,0.0323 0.61629,0.0485 0.27753,0.0218 1.67114,0.005 1.84881,0.14548 0.24617,0.19431 0.36758,0.58212 0.55137,0.87324 0.70976,1.12414 1.33215,1.90607 1.58923,3.44457 0.0889,0.53192 -0.0865,1.09971 -0.1298,1.64961 -0.10815,1.37455 -0.21632,2.7492 -0.32448,4.12385 -0.0257,0.32609 -0.16516,3.782 -0.32448,4.12385 -0.15729,0.33761 -0.52388,0.43876 -0.68116,0.77636 -0.11126,0.23861 0.0956,0.64178 -0.0649,0.82476 -0.32112,0.36593 -0.84573,-0.31401 -1.23256,-0.097 -0.54704,0.30684 -0.79177,1.35005 -1.36233,1.55252 -0.40345,0.1433 -0.8291,-0.24017 -1.23254,-0.097 -0.2853,0.10133 -0.45412,0.51757 -0.68119,0.77636 -0.84331,0.2102 -1.67849,0.55635 -2.52997,0.63079 -1.23915,0.10833 -2.46511,-0.19397 -3.69765,-0.29095 -2.67051,-0.21013 -5.34102,-0.42025 -8.01155,-0.63038 -0.46941,-0.0369 -3.94135,-0.13679 -4.31391,-0.33944 -0.26592,-0.1446 -0.27697,-0.75676 -0.55139,-0.87324 -0.58211,-0.24713 -1.23254,-0.097 -1.8488,-0.14547 -0.41086,-0.0323 -0.85648,0.10754 -1.23255,-0.097 -0.26593,-0.1447 -0.36757,-0.58222 -0.55137,-0.87334 -0.59466,-0.32334 -1.1703,-0.70979 -1.78392,-0.97022 -4.28515,-1.81874 -2.49857,-0.51257 -7.88178,-2.27989 -0.62687,-0.2058 -1.17809,-0.68231 -1.78389,-0.97032 -6.81968,-3.24184 0.47895,0.65358 -3.56786,-1.94045 -1.88732,-1.20977 -2.29417,-1.01037 -4.24903,-1.16419 -0.20541,-0.0162 -0.45573,-0.23146 -0.61626,-0.0485 -0.13926,0.15867 -0.0468,2.15688 -0.19469,2.47426 -0.15729,0.3376 -0.54487,0.42376 -0.68117,0.77636 -2.2591,5.84259 0.0652,0.80469 -1.07056,5.72496 -0.13745,0.59565 -0.55491,1.02924 -0.74606,1.60101 -0.0804,0.24013 -0.37437,3.9496 -0.32448,4.12385 0.10256,0.35805 0.33732,0.62168 0.55136,0.87335 2.39433,2.81388 0.99647,1.1153 4.11922,2.81368 1.01264,0.55083 1.91991,1.40162 2.95159,1.89206 0.0548,0.0264 3.02968,0.26046 3.08136,0.24246 0.0532,-0.0189 1.22406,-1.434 1.36233,-1.55262 1.72806,-1.48152 2.00217,-1.17056 3.34096,-3.05665 0.5236,-0.7376 0.80831,-1.7875 1.42724,-2.37727 2.76924,-2.63901 2.21224,-0.85761 5.05996,-1.26168 0.46106,-0.0654 0.83589,-0.67661 1.29746,-0.72776 1.1761,-0.13035 4.69182,0.36917 6.16273,0.48491 0.82169,0.0647 1.64338,0.1293 2.46508,0.19396 0.41086,0.0323 0.8494,-0.0851 1.23256,0.097 3.53921,1.68241 3.53514,2.81628 5.70844,6.25837 1.23272,1.95231 1.16394,0.96888 1.03786,2.57123 -0.0865,1.0998 -0.17306,2.1994 -0.25959,3.2992 -0.0216,0.27485 0.12851,0.71619 -0.0649,0.82475 -0.38681,0.21693 -0.84569,-0.314 -1.23254,-0.097 -0.19342,0.10847 -0.0433,0.5498 -0.0649,0.82475 -0.43248,0.24263 -0.84009,0.6138 -1.29742,0.72777 -0.40909,0.10193 -0.8235,-0.1989 -1.23256,-0.097 -1.29362,0.32252 -2.52947,1.08122 -3.82743,1.35866 -0.61568,0.13151 -1.23178,-0.25973 -1.84883,-0.14548 -0.45991,0.0851 -0.83557,0.70262 -1.29743,0.72777 -1.65246,0.0902 -3.28679,-0.25862 -4.93019,-0.38793 -0.8217,-0.0646 -1.66881,0.0507 -2.46508,-0.19396 -1.01509,-0.31179 -2.00564,-0.73539 -3.01648,-1.06721 -1.20583,-0.3959 -2.52145,-0.40332 -3.63275,-1.11569 -0.91349,-0.58556 -1.47576,-1.83863 -2.2704,-2.66832 -2.49038,-2.60046 -2.92664,-2.08068 -4.54079,-5.33663 -0.9521,-1.9205 -0.63885,-4.62326 -1.32964,-6.74368 -0.34305,-1.05295 -1.3014,-1.57303 -1.65414,-2.61983 -0.20488,-0.60804 -0.64758,-7.31754 -0.64847,-7.51993 -0.007,-1.65015 0.25959,-3.29911 0.38939,-4.94871 0.0433,-0.5498 0.14508,-1.10061 0.12979,-1.6495 -0.0389,-1.39947 -0.28574,-2.77005 -0.2918,-4.17245 -0.005,-1.10005 0.17306,-2.1994 0.25959,-3.2991 0.0433,-0.5498 0.27484,-1.14326 0.12979,-1.6495 -0.2051,-0.71599 -0.86759,-1.04869 -1.10273,-1.74658 -1.79132,-5.316 0.46616,-3.45899 -3.17848,-6.88916 -0.16503,-0.15532 -0.41084,-0.0323 -0.61627,-0.0485 -2.23482,-0.17584 -0.62497,-0.30035 -3.89232,2.18341 -9.13504,6.94413 -5.42372,3.17654 -13.9152,11.35335 -2.05989,1.98353 -4.33254,3.67888 -6.06565,6.16179 -1.9327,2.76882 -1.92092,8.65167 -2.20599,12.27468 -0.1298,1.6496 -0.25959,3.2991 -0.38939,4.9487 -0.0433,0.5498 -0.16802,1.10402 -0.12979,1.6495 0.0603,0.86259 0.25756,1.69082 0.4216,2.52285 0.27933,1.41677 0.43878,2.90657 0.90803,4.22083 1.75013,4.90179 5.20175,8.36341 8.40044,11.44953 1.31911,1.27259 2.72391,2.38632 4.05434,3.63854 0.59499,0.55999 1.06896,1.35101 1.71903,1.79497 0.74336,0.50778 1.58715,0.73105 2.4002,1.01882 1.19946,0.42429 2.40022,0.86634 3.63274,1.11569 1.62097,0.32787 3.28678,0.25862 4.93018,0.38793 2.87594,0.22629 5.75187,0.45258 8.62784,0.67888 0.82168,0.0647 1.63884,0.25112 2.46507,0.19396 4.63979,-0.32114 1.68185,-0.15505 5.12488,-2.08643 1.47299,-0.8263 3.10027,-1.11464 4.50861,-2.13491 2.8894,-2.0932 3.17739,-4.41055 4.96288,-7.90827 2.62073,-5.13404 0.27778,0.68319 2.91937,-5.57949 1.82227,-4.32037 1.67708,-4.97006 3.86013,-9.65486 1.97086,-4.22953 2.74866,-5.43704 5.02777,-8.73312 2.55857,-3.7003 5.11893,-7.58242 8.79034,-9.26702 1.87987,-0.8625 6.11884,-1.7759 8.20622,-1.84387 1.85862,-0.0606 3.69763,0.29094 5.54646,0.43642 0.26787,0.0211 2.96811,0.13624 3.08137,0.24245 0.8251,0.77652 1.5136,1.77881 2.27041,2.66822 0.87606,1.02959 2.65151,2.85077 3.37314,4.4149 0.2369,0.51346 0.19589,1.23778 0.48647,1.69799 0.12996,0.20583 0.41086,0.0323 0.61629,0.0485 0.20543,0.0162 0.41085,0.0323 0.61626,0.0485 0.82172,0.0647 1.64036,0.31103 2.46511,0.19397 0.65202,-0.0924 1.27581,-0.45282 1.91371,-0.67928 4.32221,-1.53429 4.90798,-1.57055 9.63347,-4.22134 1.12778,-0.63259 2.13024,-1.66684 3.27607,-2.2318 0.81019,-0.39948 1.71044,-0.27176 2.52999,-0.63088 0.28108,-0.12314 0.3919,-0.70413 0.68117,-0.77626 0.45453,-0.1133 3.01811,0.23747 3.69764,0.29094 1.02711,0.0808 2.05425,0.16164 3.08137,0.24246 0.20541,0.0162 0.41083,0.0323 0.61626,0.0485 0.61626,0.0485 1.23255,0.097 1.84882,0.14547 0.41085,0.0323 0.83194,-0.0128 1.23254,0.097 1.02134,0.27988 2.00562,0.73539 3.01647,1.06721 3.07951,1.01108 4.27201,0.61319 6.51941,3.8325 6.67266,9.55857 1.50158,2.23558 3.53516,10.23685 0.47097,1.85295 1.50332,3.34633 2.07571,5.14257 1.28507,4.03273 0.83372,5.16561 0.51868,9.16954 -0.0433,0.5499 -0.0865,1.0997 -0.1298,1.6496 -0.0433,0.5498 0.13411,1.20995 -0.12979,1.6495 -0.29503,0.49147 -0.84639,0.56766 -1.29744,0.72787 -0.83172,0.29517 -1.68197,0.47382 -2.52999,0.63079 -4.35318,0.80571 -3.49426,0.55491 -8.07645,0.19436 -4.1296,-0.32493 -8.23435,-0.47277 -12.26058,-1.79457 -2.2603,-0.74209 -4.40688,-1.94648 -6.58429,-3.00775 -1.20783,-0.58866 -2.5452,-0.92079 -3.56786,-1.94055 -1.14336,-1.1401 -1.77282,-2.98937 -2.75687,-4.36631 -0.69582,-0.97368 -1.68407,-1.57194 -2.27041,-2.66831 -0.52441,-0.98056 -0.64865,-2.26406 -0.97295,-3.39609 -0.48649,-1.69799 -1.16136,-3.3102 -1.45945,-5.09408 -0.2703,-1.61758 -0.0515,-3.35096 -0.22688,-4.99719 -0.36476,-3.42336 -1.20177,-6.70162 -1.68634,-10.09128 -0.15794,-1.10489 -0.17344,-2.25114 -0.35668,-3.34759 -0.47539,-2.84486 -1.51348,-7.30613 -2.98377,-9.3635 -0.74941,-1.04872 -1.92546,-1.3832 -2.95156,-1.89206 -2.76964,-1.37329 -3.65168,-1.11719 -6.71412,-1.35815 -3.81035,-0.29982 -5.7987,-0.71727 -9.99016,0.87364 -1.79702,0.68214 -3.43217,2.04468 -5.18978,2.91118 -3.95648,1.95086 -7.86339,3.00975 -11.61209,5.72547 -0.78456,0.56831 -1.29121,1.6838 -2.04351,2.32888 -0.0682,0.0578 -1.66823,-0.13127 -1.84883,-0.14548 -1.17765,-0.0927 -2.73504,0.0591 -3.63271,-1.11579 -5.24263,-6.86159 2.51582,-0.0191 -3.79476,-6.93765 -0.7242,-0.79395 -3.81092,-3.21333 -5.28687,-3.73552 -0.39438,-0.13957 -0.82169,-0.0647 -1.23256,-0.097 -1.0271,-0.0808 -2.05422,-0.16164 -3.08134,-0.24246 -0.20543,-0.0162 -0.54376,0.20468 -0.61629,-0.0485 -0.19457,-0.67925 0.38929,-1.79509 0.1947,-2.47435 -0.10255,-0.35795 -0.48852,-0.49715 -0.55136,-0.87324 -9.3e-4,-7e-5 0.1952,-2.47351 0.19469,-2.47435 -0.71827,-1.13755 -1.55173,1.88699 -2.72471,3.10513 -14.32146,14.87373 1.36104,-4.05583 -10.21752,11.6443 -0.83796,1.13627 -2.21258,1.67481 -2.7247,3.10514 -0.63371,1.76995 -0.30286,3.849 -0.45428,5.77346 -0.1298,1.6496 -0.65602,3.35307 -0.38939,4.9487 0.18853,1.12827 1.10276,1.74648 1.65413,2.61983 0.73518,1.16435 1.26343,2.63041 2.20551,3.49306 4.59948,4.21137 7.44139,3.0752 13.3633,3.54116 5.78447,0.45514 2.84338,0.22373 8.62785,0.67887 2.25966,0.1778 4.5085,0.55717 6.77899,0.5334 0.85108,-0.009 1.68197,-0.47392 2.53,-0.63088 1.25109,-0.23158 2.53548,-0.0982 3.76254,-0.53381 0.72731,-0.25814 1.24114,-1.32021 1.97861,-1.50413 1.02268,-0.25496 2.05424,0.16164 3.08137,0.24246 1.64339,0.12931 3.28678,0.25862 4.93018,0.38793 2.87594,0.22629 5.75187,0.45258 8.62783,0.67887 0.8217,0.0647 1.65609,0.0202 2.4651,0.19396 1.23024,0.26432 2.43327,0.69141 3.63272,1.1158 3.50206,1.23903 5.82839,1.46781 8.30334,4.80273 0.51162,0.68935 0.93387,1.59557 1.03785,2.57133 0.1442,1.35318 -0.21632,2.7493 -0.32448,4.12386 -0.0157,0.20008 -0.17277,2.44939 -0.19469,2.47435 -0.0308,0.0347 -2.79079,-0.21959 -3.08138,-0.24246 -0.20542,-0.0162 -0.48631,0.15734 -0.61625,-0.0485 -0.12996,-0.20583 0.0433,-0.5498 0.0649,-0.82475 0.0433,-0.5499 0.0865,-1.0997 0.1298,-1.6496 0.0216,-0.27495 0.0433,-0.5498 0.0649,-0.82475 0.0433,-0.5498 -0.12463,-1.20048 0.1298,-1.6496 3.13876,-5.54056 4.72084,-5.47346 9.4066,-9.21844 2.45771,-1.96426 4.82387,-4.13986 7.29817,-6.0648 10.70546,-8.32841 3.94245,-1.48974 12.68264,-11.45033 2.27058,-2.58767 4.60581,-5.07646 6.81171,-7.7629 0.99873,-1.21631 2.11917,-2.37007 2.78957,-3.92989 0.63686,-1.48171 0.75038,-3.24594 1.00566,-4.90021 0.16775,-1.0878 0.17306,-2.19941 0.25959,-3.29911 0.0649,-0.82475 0.41226,-1.71494 0.19468,-2.47425 -0.30768,-1.07394 -0.99826,-1.88612 -1.65412,-2.61982 -2.01557,-2.25506 -4.19146,-4.24868 -6.32474,-6.30686 -10.50026,-10.13058 -7.26305,-8.61016 -21.34216,-12.46784 -1.4021,-0.38416 -2.87594,-0.22629 -4.31391,-0.33943 -0.27754,-0.0218 -1.6514,-0.25613 -1.84881,-0.14548 -0.27355,0.15352 -0.40764,0.62285 -0.68118,0.77636 -0.19342,0.10846 -0.42287,-0.15695 -0.61627,-0.0485 -0.27354,0.15342 -0.3959,0.67503 -0.68116,0.77626 -1.02862,0.36514 -2.13698,0.11924 -3.14626,0.5823 -7.93423,3.64044 -1.0723,3.1199 -9.56859,3.39649 -0.82609,0.0273 -1.64341,-0.12931 -2.4651,-0.19397 -0.41085,-0.0323 -0.8844,0.17788 -1.23254,-0.097 -0.0624,-0.049 0.37383,-3.11808 0.25958,-3.299 -0.12995,-0.20583 -0.48632,0.15733 -0.61628,-0.0485 -0.12996,-0.20582 0.19487,-0.61902 0.0649,-0.82485 -0.12995,-0.20582 -0.41085,-0.0323 -0.61625,-0.0485 -0.41088,-0.0323 -0.82171,-0.0647 -1.23256,-0.097 -0.61627,-0.0485 -1.24072,-0.34167 -1.84883,-0.14547 -4.91116,1.58464 -11.05681,5.41396 -15.50441,7.90877 -3.02738,1.69816 -5.95948,3.7859 -9.08212,5.09458 -0.49638,0.20801 -11.74426,2.95587 -13.26622,3.10555 -2.07128,0.20385 -4.23299,-0.18251 -6.09784,-1.30967 -0.82621,-0.49934 -1.51825,-1.31976 -2.33528,-1.84346 -1.15549,-0.74072 -2.4417,-1.12801 -3.56784,-1.94055 -1.03828,-0.74915 -1.75522,-2.23657 -2.88668,-2.7168 -1.35832,-0.57653 -2.87593,-0.22629 -4.31392,-0.33944 -0.27753,-0.0218 -1.65138,-0.25623 -1.84879,-0.14547 -0.27354,0.15341 -0.40768,0.62284 -0.6812,0.77626 -0.61162,0.34318 -1.2758,0.45291 -1.91371,0.67937 -0.63791,0.22636 -1.2703,0.48957 -1.9137,0.67928 -0.83892,0.24736 -1.67837,0.57191 -2.53,0.63079 -1.44591,0.10009 -2.87595,-0.22629 -4.31392,-0.33944 -0.17228,-0.0136 -2.97985,-0.29967 -3.08135,-0.24245 -6.29424,3.53074 8.89884,-0.28002 -5.80606,2.86268 -6.25439,1.33671 -6.71997,0.69692 -12.58507,2.32928 -0.45588,0.12693 -0.84636,0.56776 -1.29743,0.72787 -0.83174,0.29517 -1.71046,0.27167 -2.53,0.63079 -0.87924,0.38531 -1.25268,2.58279 -1.49214,3.20212 -0.2155,0.55741 -0.60853,1.00536 -0.74604,1.60101 -0.18858,0.81692 -0.30488,3.87472 -0.38939,4.9487 -0.0865,1.09971 -0.43734,2.23539 -0.25958,3.29911 0.12568,0.75217 0.75952,1.13798 1.10273,1.74658 1.28989,2.28723 2.41323,4.74963 3.79473,6.93764 1.32913,2.10505 3.90442,4.83427 5.70845,6.25837 0.55046,0.43451 1.18929,0.64678 1.78393,0.97022 1.18928,0.64688 2.3088,1.5538 3.56786,1.94055 1.19443,0.36682 2.46509,0.19396 3.69764,0.29095 1.02711,0.0808 2.05423,0.16163 3.08137,0.24245 0.82169,0.0647 1.63888,0.25113 2.46509,0.19397 1.05324,-0.0729 2.09375,-0.4657 3.14624,-0.5824 1.29247,-0.14326 10.83797,-0.71776 11.839,-0.72817 2.00957,-0.021 4.14771,0.32636 6.16275,0.48491 0.41084,0.0323 0.81968,0.14274 1.23254,0.097 11.00051,-1.21926 -8.49704,-0.14517 8.69271,-0.14588 1.66357,0 3.33039,-0.2731 4.9951,-0.43692 4.58462,-0.45096 9.16696,-1.22851 13.75267,-1.40755 2.47838,-0.0967 4.93021,0.38793 7.3953,0.58189 1.84881,0.14547 3.69764,0.29095 5.54645,0.43642 0.27756,0.0218 1.67113,0.005 1.84882,0.14547 0.24616,0.19441 0.39379,0.5554 0.55137,0.87335 2.55807,5.15985 0.78389,1.5632 2.56218,6.84066 0.34597,0.85707 0.69192,1.71415 1.03786,2.57133 0.36759,0.58213 0.83138,1.07412 1.10277,1.74648 0.096,0.23776 -0.19486,0.61893 -0.0649,0.82476 0.12995,0.20582 0.41084,0.0323 0.61626,0.0485 0.41085,0.0323 0.82168,0.0647 1.23256,0.097 2.67049,0.21012 5.34102,0.42025 8.01154,0.63038 1.84883,0.14547 3.69763,0.29095 5.54646,0.43642 3.8188,0.30048 7.29739,0.84914 11.1578,0.0481 5.3307,-1.10616 10.53827,-3.36513 15.86112,-4.56118 0.15065,-0.0333 2.80348,0.0914 3.08135,0.24245 0.42048,0.22869 0.84575,0.50049 1.16767,0.92184 0.81435,1.06586 1.42796,2.37924 2.20549,3.49306 1.26723,1.8153 2.55853,3.60491 3.92455,5.28804 1.27453,1.57052 2.87145,2.69274 3.98941,4.46339 0.25993,0.41156 -0.27483,1.14327 -0.12979,1.64951 0.0725,0.25316 0.48631,-0.15734 0.61627,0.0485 0.12995,0.20582 -0.0433,0.5499 -0.0649,0.82475 -0.0158,0.20008 -0.17277,2.44939 -0.19469,2.47435 -0.35902,0.4091 -0.86496,0.48525 -1.29745,0.72777 -2.65133,1.48731 -0.8381,0.76401 -5.61137,0.38843 -3.90306,-0.30711 -7.80612,-0.61422 -11.70918,-0.92133 -0.95592,-0.0752 -9.45971,0.0694 -12.26056,-1.79467 -6.12437,-4.07587 -1.96779,-3.47436 -5.28687,-3.73552 -0.41085,-0.0323 -0.82345,-0.19891 -1.23254,-0.097 -0.64682,0.16126 -1.27581,0.45292 -1.91372,0.67937 -2.33148,0.82757 -6.65322,2.49831 -8.88742,2.62023 -2.47869,0.13529 -4.93018,-0.38792 -7.39528,-0.58189 -5.54645,-0.43642 -11.09291,-0.87284 -16.63938,-1.30926 -3.49221,-0.27478 -6.98442,-0.54956 -10.47664,-0.82434 -1.43797,-0.11315 -2.87593,-0.22629 -4.31391,-0.33944 -0.61627,-0.0485 -1.24791,0.0191 -1.84883,-0.14547 -8.91378,-2.44234 11.0346,0.24061 -10.34682,-2.47395 -15.19525,-1.92919 -3.4591,1.31331 -17.06098,-3.8321 -2.00025,-0.75664 -4.02194,-1.42298 -6.03294,-2.13441 -1.00549,-0.35577 -1.99512,-0.78743 -3.01647,-1.06721 -0.6009,-0.16464 -1.23254,-0.097 -1.8488,-0.14547 -0.20544,-0.0162 -0.50506,-0.28721 -0.61628,-0.0485 -0.0877,0.18819 -0.21695,2.75727 -0.25959,3.2991 -0.0464,0.58958 -0.46131,4.51813 -0.38937,4.9486 0.0629,0.3761 0.39377,0.5554 0.55137,0.87335 0.55718,1.12386 0.74703,2.70021 1.58922,3.44457 6.88018,6.08093 8.22568,4.79662 16.31489,5.43311 3.69765,0.29095 7.39527,0.58189 11.09292,0.87284 0.8217,0.0647 1.63885,0.23909 2.46509,0.19396 6.47165,-0.35314 12.93883,-3.06399 19.07228,-5.96822 2.38441,-1.12914 4.80262,-2.16073 7.10349,-3.59055 5.71396,-3.55063 4.93839,-4.9241 10.44443,-6.64711 0.81191,-0.25409 1.6434,0.12931 2.46511,0.19397 2.46508,0.19396 4.93018,0.38793 7.39526,0.58189 7.6007,0.59806 15.20142,1.19611 22.80212,1.79417 1.43797,0.11314 2.87594,0.22629 4.3139,0.33943 0.61628,0.0485 1.23255,0.097 1.84882,0.14548 0.20543,0.0162 0.41085,0.0323 0.61628,0.0485 0.20541,0.0162 0.45572,0.23146 0.61626,0.0485 0.35903,-0.4092 0.38707,-1.19191 0.74607,-1.60111 0.57889,-0.65972 1.48466,-0.7313 1.97861,-1.50403 0.73779,-1.15418 0.99323,-2.71516 1.55703,-4.02697 1.23962,-2.88405 2.94172,-5.6623 3.79525,-8.8301 0.14155,-0.52552 0.0865,-1.09971 0.12979,-1.64951 0.12979,-1.6496 0.25958,-3.2991 0.38938,-4.9487 0.0216,-0.27495 0.0433,-0.5498 0.0649,-0.82475 0.0216,-0.27495 -0.0463,-0.58614 0.0649,-0.82475 0.51167,-1.09805 3.21426,-2.19313 3.27607,-2.2319 1.10834,-0.6961 2.09251,-1.86149 3.27604,-2.2319 1.01491,-0.31756 2.05426,0.16164 3.08137,0.24246 0.61627,0.0485 1.23255,0.097 1.84883,0.14547 0.82169,0.0647 1.6434,0.12931 2.46509,0.19397 1.02713,0.0808 2.07559,-0.008 3.08137,0.24245 1.53288,0.38212 4.44188,3.23881 5.28686,3.73552 0.94671,0.55658 2.00139,0.75552 3.01647,1.06731 0.19909,0.0608 0.45571,0.23146 0.61627,0.0485 0.96642,-1.10139 0.82761,-2.63731 0.94077,-4.07546 0.0865,-1.0997 0.17306,-2.1994 0.25959,-3.29911 0.0433,-0.5498 0.21866,-1.11769 0.1298,-1.6496 -0.0629,-0.37599 -0.34779,-0.60675 -0.55138,-0.87324 -2.87459,-3.76228 -3.24305,-4.63387 -7.55726,-6.40384 -9.10363,-3.73471 -8.87827,-3.18815 -17.06099,-3.832 -1.02712,-0.0808 -2.05422,-0.16163 -3.08136,-0.24245 -2.97351,-0.23397 -3.85258,-0.74059 -6.90879,1.1161 -1.64413,0.99881 -3.06485,2.58826 -4.6384,3.78451 -4.70208,3.57428 -6.05137,3.21312 -9.40661,9.21844 -0.37376,0.66894 -2.21754,6.6037 -2.49776,8.10223 -0.15147,0.80962 -0.1298,1.64961 -0.19469,2.47436 -0.0216,0.27495 0.0957,0.64178 -0.0649,0.82475 -0.16056,0.18297 -0.48631,0.15734 -0.61627,-0.0485 -0.12998,-0.20583 0.15203,-0.58067 0.0649,-0.82475 -0.4357,-1.22034 -1.02255,-2.32949 -1.58923,-3.44458 -1.04494,-2.0561 -2.23805,-3.9721 -3.24337,-6.0644 -1.48314,-3.08665 -2.81893,-6.30024 -4.2163,-9.46049 -0.88379,-1.99868 -2.1664,-3.75862 -2.62709,-6.01591 -0.32132,-1.57435 0.25959,-3.2991 0.38938,-4.9486 0.29018,-3.6879 -0.38263,-2.56723 0.94077,-4.07547 0.68115,-0.77626 1.36233,-1.55252 2.04349,-2.32878 0.31359,-1.35848 0.17524,-3.06469 0.94077,-4.07546 0.80838,-1.06738 2.19287,-0.74809 3.21114,-1.40705 0.53484,-0.34611 0.80017,-1.30625 1.36235,-1.55261 0.22138,-0.097 4.54151,0.35734 4.9302,0.38792 0.14945,0.0118 1.8311,0.117 1.84881,0.14548 0.12997,0.20583 -0.0433,0.5499 -0.0649,0.82475 -0.0216,0.27495 -0.0433,0.5499 -0.0649,0.82485 -0.23796,3.02415 -0.47591,6.0483 -0.71387,9.07256 -0.0433,0.5498 -0.0865,1.0997 -0.12979,1.6495 -0.0649,0.82485 0.037,1.69462 -0.19469,2.47435 -0.34542,1.16239 -1.04133,2.10049 -1.49213,3.20212 -0.31877,0.779 -0.39372,1.73085 -0.81097,2.42586 -0.13196,0.21983 -0.41086,-0.0323 -0.61628,-0.0485 -0.61628,-0.0485 -1.23255,-0.097 -1.84881,-0.14547 -3.03183,-0.23856 -6.35587,-0.0166 -9.1792,-1.55212 -2.44456,-1.32955 -4.77775,-2.98587 -7.07081,-4.70584 -1.42209,-1.06664 -3.00655,-1.97904 -4.0543,-3.63854 -0.68512,-1.08509 -0.26988,-4.45099 -0.16201,-5.82195 0.0433,-0.5498 0.0865,-1.0997 0.12979,-1.6495 0.0216,-0.27495 -0.0206,-0.56907 0.0649,-0.82475 2.00942,-6.0109 6.46907,-4.47033 10.24975,-4.17285 0.97633,0.0768 1.68445,-0.11492 2.40021,1.01872 0.64979,1.02914 1.32985,2.12907 1.58922,3.44457 0.20749,1.05242 -0.17306,2.1994 -0.25959,3.2991 -0.0649,0.82485 -0.1298,1.64961 -0.19469,2.47436 -0.1947,2.47435 -0.12987,4.9941 -0.58408,7.42305 -0.0713,0.38169 -0.45411,0.51748 -0.68116,0.77626 -0.90823,1.03505 -1.76957,2.14982 -2.72469,3.10514 -0.8442,0.84438 -1.70937,1.6834 -2.65977,2.28039 -4.51619,2.83658 -9.68015,1.7279 -14.36899,1.35896 -0.61626,-0.0485 -1.23253,-0.097 -1.8488,-0.14547 -0.41085,-0.0323 -0.86717,0.1373 -1.23256,-0.097 -0.65873,-0.42217 -1.06897,-1.35091 -1.71902,-1.79497 -8.69879,-5.94196 3.15122,3.71112 -4.11921,-2.81379 0.16319,-4.75003 -2.01423,-1.15205 -2.95159,-1.89196 -0.24618,-0.19431 -0.26086,-0.85048 -0.55138,-0.87334 -0.20541,-0.0162 -0.0433,0.5499 -0.0649,0.82485 -0.0216,0.27485 -0.0433,0.5498 -0.0649,0.82475 -0.0511,0.6492 -0.26973,4.06156 -0.32448,4.12386 -0.16056,0.18297 -0.41083,-0.0323 -0.61627,-0.0485 -0.20541,-0.0162 -0.45734,0.11748 -0.61626,-0.0485 -0.44952,-0.46931 -0.73517,-1.16436 -1.10275,-1.74649 -1.40917,-2.23181 -2.21735,-2.92514 -2.6271,-6.01591 -0.1069,-0.80637 0.1298,-1.6496 0.19469,-2.47435 0.0433,-0.5499 -0.0412,-1.13814 0.12979,-1.6495 0.12094,-0.36163 0.41632,-0.59588 0.68118,-0.77636 0.83754,-0.57056 1.67507,-1.28537 2.59489,-1.45554 4.19069,-0.77566 9.47981,-0.084 13.62291,0.24195 0.61628,0.0485 1.2479,-0.0191 1.84881,0.14547 1.12213,0.30747 3.47439,1.21619 4.11923,2.81379 0.60283,1.49359 0.35444,3.37601 0.22688,4.9972 -0.0448,0.56954 -0.14625,3.05574 -0.25959,3.2991 -0.72472,1.55525 -2.08388,0.66589 -3.14625,0.5823 -1.84883,-0.14548 -3.69764,-0.29095 -5.54648,-0.43642 -2.92442,-0.23011 -1.69142,-0.62792 -3.76252,0.5339 -0.43249,0.24253 -0.93842,0.31857 -1.29744,0.72777 -0.16055,0.18297 -0.0433,0.5498 -0.0649,0.82475 -0.0216,0.27495 -0.0433,0.5498 -0.0649,0.82475 -0.0557,0.70792 -0.4716,4.45664 -0.38939,4.94871 0.0628,0.37608 0.36758,0.58213 0.55139,0.87324 -0.0649,0.82475 -0.1298,1.6496 -0.19469,2.47435 -0.0422,0.53665 0.10774,2.34548 -0.81098,2.42586 -1.44563,0.1264 -2.87595,-0.22629 -4.31393,-0.33943 -0.82168,-0.0647 -1.64339,-0.12931 -2.46507,-0.19397 -1.23256,-0.097 -2.49916,0.0557 -3.69766,-0.29094 -2.95443,-0.85469 -10.30259,-5.7578 -11.87116,-6.74328 -6.83537,-4.29441 -4.71136,-2.04788 -9.27631,-8.19881 -1.2076,-1.62724 -0.9434,-3.77173 -0.77827,-5.87044 0.0216,-0.27495 0.0433,-0.5499 0.0649,-0.82485 0.0216,-0.27485 0.19484,-0.61892 0.0649,-0.82475 -0.12995,-0.20583 -0.48631,0.15734 -0.61626,-0.0485 -0.12998,-0.20583 0.19485,-0.61892 0.0649,-0.82475 -0.12997,-0.20583 -0.48632,0.15734 -0.61627,-0.0485 -0.12997,-0.20583 0.19485,-0.61893 0.0649,-0.82475 -0.0138,-0.0222 -2.84984,-0.22424 -3.08138,-0.24246 -0.41082,-0.0323 -0.82117,-0.17315 -1.23252,-0.097 -1.39119,0.25747 -3.77399,1.43157 -4.5735,2.95967 -0.48281,0.92267 0.0236,2.24788 -0.25959,3.2991 -0.31666,1.17528 -1.10985,2.05848 -1.49215,3.20212 -0.81095,2.42576 0.24325,0.849 -0.19469,2.47425 -0.2239,0.8311 -0.58705,1.59487 -0.81096,2.42586 -0.0708,0.26286 0.0957,0.64188 -0.0649,0.82475 -0.16056,0.18307 -0.41086,-0.0323 -0.61627,-0.0485 -1.29473,-0.10187 -0.21076,0.17912 -1.71904,-1.79497 -0.7198,-0.94207 -1.40007,-1.98123 -2.27039,-2.66832 -0.34814,-0.27475 -0.8217,-0.0647 -1.23256,-0.097 -0.41083,-0.0323 -0.82168,-0.0646 -1.23252,-0.097 -0.82172,-0.0647 -1.6424,-0.3462 -2.46509,-0.19397 -3.47792,0.64377 -0.83326,0.7643 -2.53,0.63079 -0.20543,-0.0162 -0.48634,0.15744 -0.61627,-0.0485 -0.2906,-0.46021 -0.27194,-1.16642 -0.48649,-1.69799 -0.75318,-1.86603 -1.67296,-4.35024 -3.30826,-5.23965 -0.18807,-0.10207 0.0464,0.58614 -0.0649,0.82485 -0.15731,0.3375 -0.54488,0.42376 -0.68118,0.77626 -1.0932,2.82736 -0.95244,4.2238 -1.20034,7.37446 -0.0433,0.5499 -0.0865,1.0997 -0.1298,1.6496 -0.0216,0.27495 0.0464,0.58615 -0.0649,0.82475 -0.15728,0.33761 -0.52387,0.43876 -0.68116,0.77626 -0.11126,0.23871 -0.0433,0.5499 -0.0649,0.82485 -0.0216,0.27486 -0.19486,0.61893 -0.0649,0.82476 0.12995,0.20582 0.41085,0.0323 0.61626,0.0485 0.41085,0.0323 0.86716,-0.13721 1.23256,0.097 0.65872,0.42227 1.146,1.19668 1.71901,1.79507 1.60016,0.67911 3.22915,1.25828 4.80041,2.03743 2.41023,1.19505 4.72949,2.67283 7.1357,3.881 2.16888,1.08899 4.44029,1.84168 6.5843,3.00775 2.02527,1.10156 3.98538,2.40022 5.90315,3.78401 0.25182,0.18172 0.44882,0.5153 0.55138,0.87325 0.0726,0.25317 -0.0433,0.5499 -0.0649,0.82485 -0.0433,0.5498 0.19133,1.28356 -0.12979,1.6495 -0.32111,0.36594 -0.82347,-0.19891 -1.23255,-0.097 -0.45736,0.11407 -0.86497,0.48524 -1.29744,0.72777 -2.07588,0.11331 -4.15611,0.39179 -6.22762,0.33994 -3.09189,-0.0775 -6.16274,-0.48491 -9.2441,-0.72737 -3.08137,-0.24245 -6.16274,-0.48491 -9.24412,-0.72737 -1.02713,-0.0808 -2.07246,-0.0104 -3.08137,-0.24245 -1.22747,-0.28246 -3.06809,-2.58945 -2.52999,0.63079 0.0629,0.37609 0.33278,0.62864 0.55139,0.87324 1.11473,1.24718 2.27909,2.41522 3.43805,3.59005 2.09549,2.12432 3.974,4.70111 6.32474,6.30685 3.45785,2.36202 14.95872,7.1737 19.20156,8.14992 2.42133,0.55715 4.93019,0.38793 7.39529,0.5819 1.84881,0.14547 3.68785,0.49691 5.54643,0.43641 0.65302,-0.0208 1.28516,-0.40383 1.91373,-0.67927 1.51375,-0.66331 3.06102,-1.22567 4.5086,-2.13492 0.53763,-0.33767 0.78686,-1.38294 1.36236,-1.55252 1.01732,-0.30002 2.05423,0.16164 3.08135,0.24246 1.64338,0.12931 3.28679,0.25862 4.93018,0.38792 1.02713,0.0808 2.07247,0.0103 3.08137,0.24246 2.18724,0.50322 7.66247,4.1996 8.30333,4.80273 1.16688,1.09821 1.89886,2.84491 2.75689,4.36631 0.77698,1.37769 1.60828,2.73809 2.14059,4.31791 0.57548,1.70781 -0.91003,1.47155 0.42161,2.52275 0.21277,0.16801 2.72626,0.21451 3.08136,0.24245 3.28678,0.25862 6.57357,0.51724 9.86036,0.77586 1.02713,0.0808 2.05424,0.16163 3.08137,0.24245 0.41085,0.0323 0.86714,-0.1372 1.23256,0.097 0.65872,0.42227 1.06895,1.35101 1.71901,1.79507 0.74337,0.50778 1.58715,0.73105 2.4002,1.01872 2.93313,1.03777 6.86387,1.99556 9.73058,2.42545 1.83602,0.27537 3.69763,0.29095 5.54644,0.43642 0.61628,0.0485 1.25162,-0.0379 1.84882,0.14547 0.62953,0.19328 1.1703,0.70979 1.78394,0.97023 0.19402,0.0825 0.44221,-0.0889 0.61627,0.0485 0.24615,0.19431 0.30523,0.67893 0.55137,0.87324 0.17408,0.13738 0.42224,-0.034 0.61627,0.0485 0.61361,0.26044 1.15054,0.79671 1.78394,0.97023 0.80118,0.21952 1.64339,0.1293 2.46509,0.19396 0.61627,0.0485 1.23254,0.097 1.8488,0.14547 1.64341,0.12931 3.2868,0.25862 4.93021,0.38793 2.87881,0.22652 3.81697,0.52774 6.84389,-0.29135 1.93591,-0.52386 3.80073,-1.55405 5.74115,-2.03793 5.84065,-1.45624 10.67488,-0.58164 15.92601,-5.38593 0.86961,-0.79564 1.64647,-1.89489 2.1084,-3.15363 0.36954,-1.00692 0.17306,-2.1994 0.25959,-3.29911 0.19469,-2.47435 0.38938,-4.9486 0.58407,-7.42295 0.0433,-0.5499 0.0865,-1.0997 0.1298,-1.6496 0.0216,-0.27495 -0.0957,-0.64179 0.0649,-0.82475 0.16055,-0.18298 0.41084,0.0323 0.61628,0.0485 0.82169,0.0647 1.6434,0.12931 2.46507,0.19396 0.41086,0.0323 0.84573,0.31401 1.23257,0.097 0.54704,-0.30683 0.85397,-1.13782 1.36234,-1.55262 1.04802,-0.85502 2.30783,-1.21802 3.27604,-2.2318 3.9528,-4.13878 7.3281,-9.72062 9.3095,-15.86523 0.83313,-2.58361 0.82119,-5.47114 1.26525,-8.19931 1.44848,-8.8989 0.91247,-3.71588 1.45993,-10.67357 0.0433,-0.5498 0.27483,-1.14327 0.12979,-1.6495 -0.36261,-1.26575 -0.93941,-2.41544 -1.58923,-3.44458 -2.48289,-3.93248 -5.23657,-7.54391 -7.78415,-11.40103 -1.88582,-2.85523 -3.59869,-5.91271 -5.51377,-8.73272 -0.86707,-1.27675 -1.62965,-2.85192 -2.82177,-3.54156 -1.69262,-0.97899 -9.19206,-1.81052 -11.02803,-1.69759 -2.10649,0.12956 -4.3991,-0.18153 -6.29253,1.16469 -1.85664,1.32003 -2.92401,4.08202 -4.21681,6.30726 -0.86724,1.49268 -1.80757,3.02253 -2.2382,4.80314 -0.51355,2.12355 -0.34612,4.3988 -0.51917,6.5982 -0.34612,4.39881 -0.69225,8.79771 -1.03836,13.19651 -0.0609,0.77431 -0.16959,3.66048 -0.32448,4.12386 -0.12094,0.36162 -0.5942,0.39952 -0.68116,0.77626 -0.24603,1.06568 -0.17306,2.1994 -0.25959,3.2991 -0.21633,2.7493 -0.43265,5.49851 -0.64898,8.24781 -0.19469,2.47435 -0.38938,4.9487 -0.58407,7.42305 -0.0649,0.82476 -0.12979,1.64951 -0.19469,2.47426 -0.0216,0.27495 -0.0433,0.5499 -0.0649,0.82485 -0.0216,0.27485 0.0463,0.58603 -0.0649,0.82475 -0.15728,0.3375 -0.40766,0.62284 -0.68117,0.77626 -0.19341,0.10846 -0.41086,-0.0323 -0.61626,-0.0485 -0.41085,-0.0323 -0.82171,-0.0647 -1.23257,-0.097 -3.61625,-0.28454 -3.79362,0.36024 -7.20058,-3.05624 -3.71483,-3.72518 -7.42067,-7.48947 -10.86552,-11.64339 -1.4813,-1.7863 -2.90978,-3.75963 -3.85964,-6.11289 -0.6207,-1.53783 -0.24224,-4.802 -0.0971,-6.6467 0.0433,-0.5499 -0.0119,-1.12399 0.1298,-1.6496 0.15833,-0.58759 0.42134,-1.14357 0.74605,-1.60101 1.54372,-2.17481 3.1264,-4.31375 4.8331,-6.25877 1.86307,-2.1233 4.07749,-3.33734 6.48721,-3.63904 1.44427,-0.18077 2.87594,0.22629 4.31391,0.33943 0.41085,0.0323 0.86714,-0.1372 1.23254,0.097 0.65873,0.42227 1.18228,1.14045 1.71903,1.79507 1.16273,1.41788 2.64768,2.54032 3.37317,4.4148 0.8812,2.27684 1.05706,4.98608 1.26473,7.56843 0.10947,1.36108 -0.21633,2.7493 -0.32449,4.12395 -0.0433,0.5498 0.15134,1.22906 -0.12979,1.6495 -1.15051,1.72096 -3.72721,2.06299 -5.12488,2.08643 -1.85799,0.0311 -3.69763,-0.29095 -5.54645,-0.43642 -1.23253,-0.097 -2.49915,0.0557 -3.69764,-0.29095 -4.13199,-1.1952 -6.64512,-3.83106 -9.95746,-7.42255 -0.7884,-0.85478 -2.63377,-3.13806 -1.45944,-5.09408 0.26389,-0.43965 0.82169,0.0647 1.23254,0.097 0.41085,0.0323 0.82169,0.0646 1.23255,0.097 0.41083,0.0323 0.83815,-0.0427 1.23252,0.097 2.67797,0.94738 6.05221,4.96153 7.55731,6.40374 1.54721,1.48263 3.20123,2.79914 4.60569,4.51188 0.24051,0.29327 0.71572,2.18758 0.42157,2.52284 -0.16054,0.18297 -0.41085,-0.0323 -0.61626,-0.0485 -0.61629,-0.0485 -1.23254,-0.097 -1.84882,-0.14547 -0.61628,-0.0485 -1.23256,-0.097 -1.84883,-0.14547 -1.23253,-0.097 -2.55435,0.27588 -3.69763,-0.29095 -0.95273,-0.47249 -1.30582,-2.23612 -2.27041,-2.66832 -2.13079,-0.95498 -4.50171,-0.75204 -6.71409,-1.35825 -0.63343,-0.17352 -1.13432,-0.91911 -1.78393,-0.97022 -0.0315,-0.002 -0.14283,2.31884 -0.19469,2.47435 -0.73563,2.20048 -1.1535,2.19629 -3.27607,2.2319 -2.06444,0.0347 -4.10848,-0.32328 -6.16273,-0.48491 -1.43797,-0.11315 -2.87595,-0.22629 -4.3139,-0.33944 -1.43797,-0.11314 -2.9396,0.17445 -4.31392,-0.33944 -1.49521,-0.55911 -2.77586,-1.80621 -4.11922,-2.81379 -2.36651,-1.775 -4.98952,-3.1227 -7.00588,-5.53059 -2.02197,-2.41455 -3.56367,-5.51935 -4.8975,-8.68413 -0.29743,-0.7057 0.1298,-1.6496 0.1947,-2.47435 0.0216,-0.27495 0.0433,-0.5499 0.0649,-0.82475 0.0216,-0.27495 -0.0956,-0.64188 0.0649,-0.82485 0.16056,-0.18297 0.41085,0.0323 0.61627,0.0485 0.41085,0.0323 0.83815,-0.0426 1.23254,0.097 3.67084,1.29875 3.76316,4.86779 2.98378,9.36351 -0.10492,0.60553 -0.36851,1.22346 -0.74607,1.60111 -1.45244,1.45264 -2.94086,2.98059 -4.6384,3.78441 -1.39538,0.66078 -2.91976,0.48527 -4.37879,0.48532 -2.88878,2e-4 -5.75189,-0.45259 -8.62785,-0.67888 -0.41083,-0.0323 -0.82169,-0.0647 -1.23251,-0.097 -0.41087,-0.0323 -0.84574,-0.31391 -1.23256,-0.097 -0.19342,0.10846 -0.0433,0.5499 -0.0649,0.82485 -0.0216,0.27485 -0.13736,0.57159 -0.0649,0.82475 0.10256,0.35795 0.36759,0.58213 0.55137,0.87324 0.73517,1.16436 1.25726,2.64206 2.20549,3.49307 2.66979,2.396 9.45806,5.72003 12.48747,6.79176 1.78565,0.63182 3.70816,0.57826 5.48156,1.26117 0.19584,0.0756 0.0957,0.64189 -0.0649,0.82486 -0.16055,0.18297 -0.41456,-0.11989 -0.61627,-0.0485 -0.45106,0.16012 -0.8425,0.59365 -1.29744,0.72777 -1.03746,0.30587 -2.09395,0.57713 -3.14627,0.5823 -2.27011,0.0112 -4.54202,-0.14062 -6.779,-0.5334 -0.64309,-0.1128 -1.22278,-0.55954 -1.78392,-0.97023 -1.98397,-1.4522 -4.0954,-2.69806 -5.83825,-4.60876 -0.31176,-0.34191 -0.1341,-1.21005 0.1298,-1.6496 0.29506,-0.49147 0.85618,-0.51884 1.29742,-0.72777 4.12206,-1.95187 2.41882,-1.46949 6.90882,-1.1162 0.82169,0.0646 1.65609,0.0202 2.46508,0.19396 3.77646,0.81113 6.71052,2.41513 10.15217,4.9483 3.40874,2.50892 6.91903,4.92051 9.89258,8.24731 1.11473,1.24718 1.42286,3.39969 2.07569,5.14267 0.20244,0.54044 0.38713,1.10336 0.4865,1.69799 0.11933,0.71416 -0.52992,2.10552 -0.1298,1.6496 0.35899,-0.4092 0.38704,-1.19191 0.74605,-1.60111 1.00969,-1.15064 5.55574,-5.5511 7.29817,-6.06481 1.84246,-0.54324 3.74195,-0.35697 5.61139,-0.38833 1.03218,-0.0171 2.1286,-0.22993 3.08136,0.24246 2.39806,1.18907 3.93378,4.17574 5.02727,7.03462 0.61741,1.61411 0.8749,3.45688 1.45942,5.09418 0.43572,1.22024 1.03207,2.32061 1.58924,3.44458 0.15761,0.31784 0.30523,0.67893 0.55139,0.87324 0.17406,0.13738 0.59465,0.32334 0.61628,0.0485 0.0306,-0.3888 -0.44882,-0.51529 -0.55138,-0.87324 -0.55228,-1.92786 -0.6638,-4.10853 -1.39455,-5.91893 -1.01997,-2.527 -2.41322,-4.74963 -3.79473,-6.93764 -5.35945,-8.48836 -5.84892,-10.68713 -14.56317,-11.93444 -1.48636,-0.21225 -3.32118,-0.0917 -4.4437,1.31017 -1.46278,1.82668 -1.68612,4.81858 -2.43289,7.27748 -0.29651,0.97635 -2.85467,10.92464 -3.43856,12.1777 -0.71214,1.52824 -1.76152,2.75832 -2.78957,3.92989 -3.65817,4.16899 -5.07278,5.04101 -9.27679,7.56893 -1.71225,1.02956 -3.45986,1.94078 -5.18978,2.91118 -0.86495,0.48514 -1.68017,1.22748 -2.59489,1.45563 -0.81814,0.20395 -1.64339,-0.12931 -2.46508,-0.19396 -0.41087,-0.0323 -0.82169,-0.0647 -1.23256,-0.097 -0.41086,-0.0323 -0.85645,0.10755 -1.23255,-0.097 -0.86388,-0.46991 -1.37852,-4.81176 -1.45942,-5.09417 -0.10257,-0.35795 -0.26088,-0.85039 -0.55139,-0.87324 -0.20541,-0.0162 -0.0433,0.5498 -0.0649,0.82475 -0.0865,1.0997 -0.17306,2.1994 -0.25959,3.2991 -0.0433,0.5498 0.0118,1.12399 -0.1298,1.6496 -1.00544,3.73153 -5.37817,5.17598 -7.78464,4.36671 -1.94929,-0.65542 -3.61274,-2.29917 -5.28689,-3.73552 -6.26856,-5.37819 -8.40125,-7.74056 -13.07102,-15.13645 -1.93478,-3.06431 -3.48411,-4.58704 -2.43241,-8.49027 0.0708,-0.26285 0.41085,0.0323 0.61628,0.0485 0.82171,0.0647 1.6434,0.12931 2.4651,0.19397 0.82169,0.0647 1.71292,-0.2151 2.46509,0.19396 0.53186,0.28931 0.70912,1.19571 1.10274,1.74659 1.28304,1.79527 2.8796,3.23193 3.92455,5.28804 0.61036,1.20098 0.66875,2.78875 0.90805,4.22083 0.44458,2.66037 1.00451,4.95517 -1.75171,6.50133 -2.56202,1.43706 -10.29787,-4.24527 -11.38473,-5.04529 -3.5663,-2.62493 -7.04499,-5.44811 -10.50883,-8.29579 -1.00363,-0.82507 -1.98528,-1.70829 -2.88667,-2.71681 -0.43725,-0.4892 -0.83137,-1.07412 -1.10275,-1.74648 -0.0959,-0.23776 -0.12851,-0.71639 0.0649,-0.82485 0.38681,-0.21693 0.83816,-0.0426 1.23254,0.097 0.62357,0.22069 1.34008,0.35933 1.78392,0.97032 1.92702,2.65264 3.20704,5.7234 3.60005,9.4119 0.0865,0.81199 -0.12979,1.6496 -0.19469,2.47435 -0.0216,0.27495 0.0956,0.64178 -0.0649,0.82485 -0.88425,1.00764 -1.55365,0.70761 -2.52999,0.63079 -1.23255,-0.097 -2.46511,-0.19397 -3.69764,-0.29095 -0.61626,-0.0485 -1.28468,0.16133 -1.84883,-0.14547 -0.67798,-0.36872 -1.09143,-1.29962 -1.71901,-1.79507 -2.10321,-1.6603 -4.32322,-3.05865 -6.45453,-4.65726 -1.57768,-1.1833 -3.08743,-2.51614 -4.67061,-3.68703 -1.34802,-0.99702 -2.71221,-1.9634 -4.11921,-2.81379 -0.18475,-0.11184 -0.48631,0.15734 -0.61627,-0.0485 -0.12997,-0.20583 0.0433,-0.5498 0.0649,-0.82475 0.0433,-0.5499 0.0865,-1.0997 0.12979,-1.6496 0.0433,-0.5498 0.0865,-1.0997 0.12979,-1.64951 0.0433,-0.5499 -0.0118,-1.12398 0.1298,-1.6496 0.26177,-0.97156 1.39755,-2.84213 2.1084,-3.15363 0.59629,-0.26133 1.23253,0.097 1.84882,0.14548 0.20543,0.0162 0.41086,0.0323 0.61627,0.0485 0.20543,0.0162 0.4422,-0.0889 0.61627,0.0485 0.24615,0.1943 0.36758,0.58212 0.55138,0.87324 0.1838,0.29111 0.44882,0.51529 0.55136,0.87334 0.25947,0.90564 -0.20545,1.03497 -0.68116,0.77626 -2.34173,-1.27361 -5.29585,-6.28558 -6.7463,-8.8297 -3.07326,-5.39058 -2.84687,-3.22254 -2.49728,-7.66541 0.0216,-0.27495 -0.0464,-0.58614 0.0649,-0.82475 1.22112,-2.62059 9.27092,-0.93034 9.37389,-0.92224 3.57293,0.28114 7.57039,0.16535 11.02803,1.69759 3.66484,1.62418 7.13569,3.881 10.70353,5.82154 0.59464,0.32345 1.16035,0.74963 1.78393,0.97023 0.39439,0.13957 0.82169,0.0647 1.23255,0.097 0.20542,0.0162 0.42287,0.15696 0.61626,0.0485 0.27353,-0.15342 0.40764,-0.62284 0.68117,-0.77626 4.6304,-2.59738 4.3626,-0.69102 7.29818,-6.0648 0.66905,-1.2248 1.1757,-2.61173 1.55703,-4.02698 1.04102,-3.86354 1.04849,-5.44453 1.33014,-9.02396 0.0216,-0.27495 0.0433,-0.5499 0.0649,-0.82485 0.0216,-0.27495 0.13736,-0.57159 0.0649,-0.82475 -0.64816,-2.26242 -4.28475,-1.10642 -4.86531,-1.21268 -1.23577,-0.22624 -2.39841,-0.87895 -3.63272,-1.1158 -1.21749,-0.23362 -2.49584,0.0384 -3.69764,-0.29095 -0.75006,-0.20547 -0.53336,-1.10213 -0.48647,-1.69799 0.17305,-2.1994 0.34611,-4.3988 0.51917,-6.5982 0.0433,-0.5499 0.0865,-1.0997 0.1298,-1.64961 0.0433,-0.5498 -0.0926,-1.17217 0.12979,-1.6495 0.0203,-0.0435 1.83567,0.0993 1.84881,0.14548 0.14505,0.50623 -0.0865,1.0997 -0.12979,1.6495 -0.065,0.82575 -0.28989,4.76655 -0.38938,4.9487 -0.44796,0.81999 -1.39973,0.84431 -1.97861,1.50403 -5.69264,6.48755 -2.85155,4.29716 -7.75245,11.83826 -0.58685,0.90305 -1.48372,1.39642 -2.04353,2.32888 -0.13196,0.21983 0.41084,0.0323 0.61627,0.0485 0.20542,0.0162 0.45572,0.23146 0.61629,0.0485 0.35898,-0.4091 0.40718,-1.16214 0.74608,-1.60111 3.00797,-3.89525 7.8042,-8.31083 10.83381,-11.5957 2.31693,-2.5122 4.54113,-5.17534 6.81169,-7.7629 1.13529,-1.29383 2.08159,-2.9793 3.40585,-3.8814 1.44897,-0.98718 4.77157,-0.45451 6.22763,-0.33994 0.61627,0.0485 1.23256,0.097 1.84883,0.14547 0.41085,0.0323 0.8944,-0.19825 1.23254,0.097 8.66898,7.57054 -0.34983,2.10334 7.55729,6.40384 4.13195,2.24735 2.26862,1.83832 5.41663,2.08602 0.20544,0.0162 0.42289,0.15696 0.61627,0.0485 0.27354,-0.15341 0.4824,-0.47903 0.68119,-0.77636 1.20916,-1.80852 2.40057,-3.64031 3.53565,-5.5309 1.43983,-2.39834 3.77931,-6.8681 4.47642,-9.60646 0.4036,-1.58542 0.25959,-3.2991 0.38938,-4.9486 0.0799,-1.01576 0.21204,-1.51945 -0.42161,-2.52285 -2.31577,-3.66775 -2.2786,-2.66896 -5.96803,-2.95926 -0.8217,-0.0647 -1.63941,-0.28548 -2.46508,-0.19396 -2.59917,0.2881 -4.79985,3.2176 -6.61703,5.28854 -5.80829,6.61939 -9.89916,12.20952 -12.91002,22.22099 -1.01464,3.3737 -0.56244,7.148 -0.84366,10.72206 -0.0918,1.16739 -0.52497,3.14731 0.29177,4.17234 0.65694,0.82457 1.55686,1.22901 2.33532,1.84357 4.04553,3.19358 3.91083,4.0667 9.66568,3.2502 0.58316,-0.0827 0.88742,-1.07018 1.36233,-1.55262 2.84515,-2.89022 7.02579,-6.53943 9.47149,-10.04318 1.16034,-1.6624 1.91772,-3.74591 2.91935,-5.57949 0.44796,-0.81999 0.84837,-1.71765 1.42727,-2.37737 0.16053,-0.18297 -0.0433,0.5498 -0.0649,0.82475 -0.0216,0.27495 -0.0433,0.5499 -0.0649,0.82485 -0.0216,0.27485 -0.19487,0.61892 -0.0649,0.82475 0.12993,0.20583 0.42222,-0.034 0.61626,0.0485 0.61361,0.26044 1.14434,0.83283 1.78392,0.97022 1.41576,0.3041 2.87593,0.2263 4.31391,0.33944 1.23253,0.097 2.46509,0.19397 3.69764,0.29095 1.23253,0.097 2.46509,0.19396 3.69763,0.29094 3.6636,0.28827 5.22818,1.54999 8.20624,-1.84397 0.82478,-0.9399 0.84196,-2.81964 0.94077,-4.07536 0.0216,-0.27495 0.13737,-0.57168 0.0649,-0.82475 -0.10256,-0.35805 -0.44881,-0.51529 -0.55138,-0.87334 -0.22933,-0.80046 -0.11816,-1.77103 -0.42159,-2.52275 -0.0959,-0.23775 -0.48629,0.15734 -0.61627,-0.0485 -0.12996,-0.20582 0.0433,-0.5499 0.0649,-0.82485 0.0216,-0.27485 -0.0956,-0.64178 0.0649,-0.82475 0.16058,-0.18297 0.41085,0.0323 0.61628,0.0485 0.20542,0.0162 0.44221,-0.0889 0.61627,0.0485 0.24617,0.19431 0.34364,0.61255 0.55139,0.87325 2.31531,2.90597 2.45256,2.17197 3.85963,6.11289 0.0871,0.24409 0.12852,0.71629 -0.0649,0.82475 -0.71626,0.40185 -2.69995,-0.76184 -3.01647,-1.06721 -1.99718,-1.92679 -3.86088,-4.08694 -5.70845,-6.25836 -1.93835,-2.27807 -3.89151,-4.55148 -5.64357,-7.08312 -0.0442,-0.0637 -1.77348,-3.23458 -0.90805,-4.22083 0.3211,-0.36594 0.82169,0.0647 1.23253,0.097 0.41086,0.0323 0.82172,0.0646 1.23256,0.097 0.41086,0.0323 0.84444,-0.0677 1.23254,0.097 0.43391,0.18411 0.74158,0.71046 1.16765,0.92174 1.57129,0.77915 3.34078,0.958 4.80038,2.03752 1.52267,1.12611 2.65963,2.9755 3.98945,4.4633 1.53032,1.71211 4.96062,3.75017 3.85963,6.11289 -0.11127,0.23871 -0.41086,-0.0323 -0.61629,-0.0485 -0.41085,-0.0323 -0.82169,-0.0647 -1.23254,-0.097 -1.43796,-0.11315 -2.90145,-0.0144 -4.3139,-0.33944 -0.83196,-0.19145 -1.66953,-0.48094 -2.40022,-1.01872 -4.75509,-3.49998 -9.27532,-7.51894 -14.01177,-11.06119 -2.29472,-1.71609 -4.80798,-2.91944 -7.0708,-4.70575 -0.67139,-0.52999 -1.48293,-2.06408 -1.03784,-2.57133 0.16055,-0.18297 0.41083,0.0323 0.61626,0.0485 0.20543,0.0162 0.41085,0.0323 0.61627,0.0485 2.1041,0.16556 0.97263,-0.31467 2.88667,2.71681 1.83314,2.90334 3.33207,4.79224 4.28121,8.63573 0.191,0.77337 -0.0294,1.66874 -0.19468,2.47426 -0.17427,0.84924 -0.17307,2.1995 -0.81096,2.42586 -1.6138,0.57287 -3.28679,-0.25862 -4.93017,-0.38793 -1.02714,-0.0808 -2.05425,-0.16164 -3.08138,-0.24245 -2.12014,-0.16683 -4.74526,-0.0479 -6.71409,-1.35815 -1.46173,-0.97276 -2.75073,-2.33858 -4.05433,-3.63855 -0.71972,-0.71766 -3.11995,-2.21626 -2.14062,-4.31781 0.11127,-0.23871 0.41085,0.0323 0.61627,0.0485 0.20541,0.0162 0.45734,-0.11749 0.61626,0.0485 0.44951,0.4693 0.64248,1.29559 1.10278,1.74648 1.09165,1.06943 2.55111,1.48268 3.50293,2.7653 0.67885,0.91467 0.38352,3.00685 0.29181,4.17235 -0.0433,0.5499 0.13408,1.21004 -0.12979,1.6496 -0.29506,0.49147 -0.88845,0.41689 -1.29746,0.72777 -1.57359,1.19625 -3.03588,2.66336 -4.63841,3.78441 -6.19748,4.33562 -1.8764,-0.11354 -5.93583,4.51229 -0.22705,0.25878 -0.56028,0.41463 -0.68119,0.77626 -0.17095,0.51146 -0.0865,1.0997 -0.1298,1.6496 -0.0216,0.27495 -0.16082,0.58699 -0.0649,0.82475 1.03092,2.55414 4.5135,4.626 5.77335,5.43361 4.70845,3.01814 6.19963,2.14753 12.19569,2.61933 1.02712,0.0808 2.05424,0.16163 3.08137,0.24245 2.09183,0.16459 3.57309,0.61668 5.61134,-0.38833 1.14582,-0.56496 2.22803,-1.37677 3.27606,-2.2319 2.51131,-2.04892 0.0735,-1.65393 3.21116,-1.40705 0.20544,0.0162 0.44222,-0.0889 0.61628,0.0485 1.16868,0.92251 3.97393,4.56669 4.54081,5.33653 0.15753,0.21402 11.16893,14.23176 12.74654,19.26041 0.67264,2.14407 0.28044,6.93878 -0.71386,9.07256 -0.47187,1.0126 -1.36235,1.55262 -2.04353,2.32887 -1.22864,1.40014 -2.17346,3.14852 -3.95723,3.00816 -0.2905,-0.0229 0.39191,-0.70413 0.68118,-0.77626 0.61362,-0.15304 1.25724,-0.0639 1.84883,0.14548 0.44093,0.15596 0.77844,0.61445 1.16763,0.92173 1.55687,1.22901 3.09491,2.49927 4.6706,3.68703 7.17688,5.40984 14.60798,10.21776 21.69886,15.81543"
       id="path4733-7-2"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#88196d;stroke-width:2.00768;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.94902"
       d="m 547.46699,635.72926 c -0.83621,0.2851 -1.64264,0.6444 -2.5086,0.8553 -0.32161,0.078 -0.66895,0 -1.00344,0 -0.8362,0 -1.67239,0 -2.50858,0 -1.17068,0 -2.34137,0 -3.51204,0 -0.22594,0 -1.35246,0.065 -1.50516,0 -0.21154,-0.09 -0.30493,-0.3158 -0.50171,-0.4277 -0.31115,-0.1768 -0.69229,-0.2508 -1.00343,-0.4276 -0.1968,-0.1118 -0.33449,-0.2851 -0.50173,-0.4277 -0.66639,-0.568 -1.26739,-0.8999 -1.50515,-1.7105 -0.0811,-0.2766 0,-0.5702 0,-0.8553 0,-0.1426 0.0749,-0.3002 0,-0.4277 -0.10578,-0.1803 -0.44436,-0.232 -0.50173,-0.4276 -0.12169,-0.4149 0,-0.8553 0,-1.2829 0,-0.2851 0,-0.5702 0,-0.8553 0,-0.1571 0.0202,-1.6934 0,-1.7106 -0.23649,-0.2016 -0.76691,0.2016 -1.00343,0 -0.11826,-0.1008 0,-0.2851 0,-0.4276 -0.16724,-0.1426 -0.30493,-0.3159 -0.50173,-0.4277 -0.31115,-0.1768 -0.66895,-0.2851 -1.00342,-0.4276 -0.33449,-0.1426 -0.64868,-0.3269 -1.00345,-0.4277 -0.65416,-0.1858 -1.39012,-0.1648 -2.00686,-0.4276 -0.42309,-0.1803 -0.66897,-0.5702 -1.00344,-0.8553 -0.66897,-0.2851 -1.31246,-0.6185 -2.00688,-0.8553 -0.41777,-0.1424 -2.17279,0.1431 -2.50859,0 -0.14958,-0.064 0.14958,-0.3639 0,-0.4276 -0.29917,-0.1275 -0.66896,0 -1.00344,0 -1.17067,0 -2.34135,0 -3.51203,0 -1.33792,0 -2.67584,0 -4.01376,0 -0.33446,0 -0.66895,0 -1.00342,0 -0.16724,0 -0.33948,-0.035 -0.50172,0 -0.51309,0.1092 -0.98657,0.3392 -1.50517,0.4276 -0.32798,0.056 -0.68612,-0.09 -1.00343,0 -0.22438,0.064 -0.33448,0.2851 -0.50172,0.4276 -0.33447,0.2852 -0.66895,0.5702 -1.00343,0.8553 -1.17068,0.9979 -2.34136,1.9957 -3.51204,2.9935 -0.66895,0.5702 -1.28857,1.1858 -2.00687,1.7106 -0.45782,0.3345 -1.14336,0.4441 -1.50515,0.8553 -0.20069,0.2281 0,0.5702 0,0.8553 0,0.7127 0,1.4255 0,2.1382 0,0.1426 0,0.2851 0,0.4277 0,0.1425 -0.11826,0.3268 0,0.4276 0.11825,0.1008 0.33447,0 0.50171,0 0.22595,0 1.35247,0.065 1.50517,0 0.21153,-0.09 0.33446,-0.2851 0.50171,-0.4276 0.64583,-0.5505 1.19919,-0.9282 1.50516,-1.7106 0.10577,-0.2705 0,-0.5702 0,-0.8553 0,-0.7128 0,-1.4255 0,-2.1382 0,-0.1691 0.10714,-1.9556 0,-2.1382 -0.10578,-0.1804 -0.39596,-0.2474 -0.50173,-0.4277 -0.0749,-0.1275 0.11825,-0.3268 0,-0.4276 -0.23651,-0.2016 -0.70427,0.1275 -1.00343,0 -0.42309,-0.1803 -0.55468,-0.7278 -1.00344,-0.8553 -0.31731,-0.09 -0.68612,0.09 -1.00344,0 -0.22437,-0.064 -0.33448,-0.2851 -0.50171,-0.4277 -0.66895,-0.1425 -1.32266,-0.3547 -2.00688,-0.4276 -0.99568,-0.106 -2.00688,0 -3.01032,0 -2.1741,0 -4.34821,0 -6.52232,0 -0.38216,0 -3.19769,-0.089 -3.51204,0 -0.22438,0.064 -0.27227,0.3787 -0.50173,0.4276 -0.48672,0.1038 -1.00343,0 -1.50514,0 -0.33448,0 -0.68613,-0.09 -1.00345,0 -0.22437,0.064 -0.33447,0.2851 -0.50171,0.4277 -0.50172,0.1425 -0.99209,0.3183 -1.50515,0.4276 -3.58294,0.7635 -2.05424,0.1629 -6.52236,0.8553 -0.52031,0.081 -0.99664,0.3038 -1.50514,0.4277 -5.72424,1.394 0.42914,-0.3174 -3.01032,0.8552 -1.60405,0.5469 -1.92055,0.4277 -3.51204,0.4277 -0.16722,0 -0.38346,0.1008 -0.50171,0 -0.10255,-0.087 0.0995,-1.1134 0,-1.2829 -0.10577,-0.1804 -0.41386,-0.2405 -0.50172,-0.4277 -1.45589,-3.1024 0.10401,-0.412 -0.50171,-2.9935 -0.0734,-0.3126 -0.38346,-0.5529 -0.50172,-0.8553 -0.0496,-0.127 -0.0514,-2.0504 0,-2.1382 0.10577,-0.1803 0.31251,-0.3067 0.50172,-0.4276 2.11642,-1.353 0.87726,-0.5344 3.51202,-1.283 0.8544,-0.2427 1.64264,-0.6444 2.5086,-0.8553 0.0459,-0.011 2.46794,-0.011 2.50859,0 0.0418,0.012 0.89912,0.7886 1.00343,0.8553 1.30387,0.8335 1.54544,0.6844 2.5086,1.7106 0.37669,0.4013 0.54021,0.9539 1.00345,1.2829 2.07258,1.4722 1.73534,0.5316 4.01374,0.8553 0.36887,0.053 0.63324,0.3826 1.00343,0.4277 0.94331,0.1148 3.8197,0 5.0172,0 0.66894,0 1.33791,0 2.00686,0 0.33449,0 0.68184,0.078 1.00344,0 2.97072,-0.7235 3.0396,-1.3079 5.01718,-2.9935 1.12169,-0.9561 1.00344,-0.4522 1.00344,-1.283 0,-0.5702 0,-1.1404 0,-1.7106 0,-0.1425 0.14958,-0.3639 0,-0.4276 -0.29916,-0.1275 -0.70426,0.1275 -1.00344,0 -0.14958,-0.064 0,-0.2851 0,-0.4276 -0.33447,-0.1426 -0.64064,-0.3504 -1.00341,-0.4277 -0.32452,-0.069 -0.67897,0.069 -1.00345,0 -1.02614,-0.2186 -1.97778,-0.6597 -3.01032,-0.8553 -0.48976,-0.093 -1.01317,0.084 -1.50514,0 -0.36671,-0.062 -0.63136,-0.3959 -1.00345,-0.4276 -1.33127,-0.1135 -2.67583,0 -4.01375,0 -0.66895,0 -1.34701,-0.094 -2.00687,0 -0.84116,0.1195 -1.66959,0.2976 -2.5086,0.4276 -1.00086,0.1551 -2.06579,0.1057 -3.01031,0.4277 -0.77638,0.2647 -1.31111,0.8875 -2.00688,1.2829 -2.18054,1.2391 -2.50043,0.9535 -4.01374,2.5659 -0.89262,0.951 -0.81123,2.3564 -1.50515,3.4211 -0.34459,0.5287 -1.15312,0.7578 -1.50515,1.2829 -0.2045,0.3051 -0.98985,3.7446 -1.00345,3.8488 -0.11081,0.8501 0,1.7106 0,2.5659 0,0.2851 0.0472,0.5731 0,0.8553 -0.12059,0.7195 -0.40754,1.4158 -0.50173,2.1382 -0.0739,0.5667 0,1.1404 0,1.7106 0,0.2851 0.14959,0.6003 0,0.8553 -0.21152,0.3606 -0.76873,0.5052 -1.00343,0.8553 -1.7878,2.6667 0.15698,1.8013 -3.01031,3.4211 -0.14341,0.073 -0.33447,0 -0.50171,0 -1.81941,0 -0.52479,0.1294 -3.01031,-1.2829 -6.94914,-3.9488 -4.18613,-1.8568 -10.53609,-6.4147 -1.54041,-1.1057 -3.27128,-2.0714 -4.51547,-3.4211 -1.38751,-1.5052 -1.00345,-4.5362 -1.00345,-6.4147 0,-0.8553 0,-1.7106 0,-2.5658 0,-0.2852 -0.0656,-0.5758 0,-0.8553 0.10372,-0.4421 0.31603,-0.8609 0.50172,-1.283 0.31624,-0.7187 0.54008,-1.4799 1.00344,-2.1382 1.7281,-2.4549 4.74121,-4.0988 7.52577,-5.5594 1.14833,-0.6023 2.35586,-1.1192 3.51204,-1.7106 0.51705,-0.2644 0.95093,-0.6528 1.50516,-0.8552 0.63378,-0.2316 1.33071,-0.3124 2.00688,-0.4277 0.99751,-0.17 1.99719,-0.3491 3.01031,-0.4276 1.33242,-0.1033 2.67583,0 4.01374,0 2.34136,0 4.68271,0 7.02407,0 0.66896,0 1.34199,-0.063 2.00686,0 3.73365,0.3536 1.35092,0.1481 4.01376,1.2829 1.13919,0.4855 2.43749,0.7001 3.51203,1.2829 2.20458,1.1958 2.29006,2.4017 3.51203,4.2765 1.79362,2.7518 0.26825,-0.3408 2.00688,2.9935 1.19936,2.3002 1.04053,2.6291 2.50859,5.1317 1.32537,2.2594 1.87781,2.9132 3.51203,4.7041 1.83456,2.0105 3.65903,4.1148 6.52234,5.1317 1.46611,0.5207 4.83776,1.1633 6.52234,1.283 1.49997,0.1065 3.0103,0 4.51547,0 0.21807,0 2.4102,0.05 2.5086,0 0.71703,-0.3667 1.33791,-0.8553 2.00686,-1.283 0.7744,-0.495 2.32686,-1.3615 3.01031,-2.1382 0.22439,-0.255 0.2373,-0.6299 0.50172,-0.8553 0.11826,-0.1008 0.33449,0 0.50172,0 0.16724,0 0.33449,0 0.50171,0 0.66898,0 1.34704,-0.094 2.00689,0 0.52167,0.074 1.00343,0.2851 1.50516,0.4277 3.39945,0.9658 3.87109,1.0083 7.52576,2.5658 0.87223,0.3718 1.61747,0.9454 2.50861,1.283 0.6301,0.2387 1.36664,0.2093 2.00687,0.4276 0.21959,0.075 0.27227,0.3788 0.50172,0.4277 0.36054,0.077 2.45711,0 3.0103,0 0.83621,0 1.67242,0 2.50861,0 0.16723,0 0.33447,0 0.50172,0 0.5017,0 1.00343,0 1.50515,0 0.33447,0 0.67231,0.04 1.00343,0 0.84419,-0.1028 1.66959,-0.2977 2.5086,-0.4277 2.55601,-0.3961 3.49555,-0.1427 5.51889,-1.7106 6.00745,-4.6549 1.35726,-1.0911 3.51204,-5.1317 0.49904,-0.9358 1.42939,-1.6634 2.00688,-2.5659 1.2965,-2.0259 1.00343,-2.628 1.00343,-4.704 0,-0.2851 0,-0.5702 0,-0.8553 0,-0.2851 0.18555,-0.6181 0,-0.8553 -0.20744,-0.2652 -0.64867,-0.3269 -1.00343,-0.4277 -0.65417,-0.1858 -1.33072,-0.3123 -2.00688,-0.4276 -3.47089,-0.5917 -2.79189,-0.4276 -6.52234,-0.4276 -3.36197,0 -6.69258,-0.09 -10.03437,0.4276 -1.87607,0.2907 -3.68957,0.8243 -5.5189,1.2829 -1.01475,0.2544 -2.11797,0.3713 -3.01033,0.8553 -0.99767,0.5412 -1.62472,1.4686 -2.50859,2.1382 -0.62497,0.4735 -1.46266,0.7418 -2.00686,1.283 -0.48674,0.484 -0.66897,1.1403 -1.00344,1.7105 -0.50172,0.8553 -1.15039,1.6587 -1.50516,2.5659 -0.32169,0.8226 -0.25499,1.7247 -0.50171,2.5659 -0.51308,1.7492 -1.39902,3.4046 -2.00688,5.1317 -0.19815,0.563 -0.28366,1.153 -0.50173,1.7106 -0.56575,1.4467 -1.68969,3.7035 -3.0103,4.7041 -0.67312,0.51 -1.64597,0.6347 -2.5086,0.8553 -2.32836,0.5953 -3.02571,0.4276 -5.51891,0.4276 -3.10206,0 -4.73742,0.1345 -8.02749,-0.8553 -1.41056,-0.4243 -2.64683,-1.1927 -4.01375,-1.7106 -3.07703,-1.1656 -6.17072,-1.8697 -9.03092,-3.4211 -0.59861,-0.3247 -0.93754,-0.9201 -1.50516,-1.283 -0.0514,-0.033 -1.35814,0 -1.50517,0 -0.95874,0 -2.20918,-0.1414 -3.01029,0.4277 -4.6787,3.3232 2.03435,0.1119 -3.51205,3.4211 -0.6365,0.3798 -3.28801,1.5014 -4.51546,1.7106 -0.32799,0.056 -0.66896,0 -1.00345,0 -0.83618,0 -1.6724,0 -2.50858,0 -0.16725,0 -0.42693,-0.1275 -0.50172,0 -0.20069,0.3421 0.20068,0.9408 0,1.283 -0.10577,0.1803 -0.42692,0.2363 -0.50172,0.4276 -7.5e-4,10e-4 4.8e-4,1.2825 0,1.2829 -0.65356,0.5571 -1.13537,-1.0353 -2.00687,-1.7105 -10.6407,-8.2452 0.843,2.1451 -7.52578,-6.4147 -0.60564,-0.6195 -1.68358,-0.9528 -2.00688,-1.7106 -0.40007,-0.9377 0,-1.9957 0,-2.9935 0,-0.8553 -0.31732,-1.7545 0,-2.5659 0.22438,-0.5737 1.00344,-0.8552 1.50517,-1.2829 0.66894,-0.5702 1.1897,-1.3043 2.00686,-1.7106 3.9896,-1.9836 6.21667,-1.2829 11.0378,-1.2829 4.70923,0 2.31485,0 7.02408,0 1.83962,0 3.68334,-0.1043 5.51889,0 0.68802,0.039 1.33072,0.3124 2.00688,0.4276 0.99753,0.1701 2.04523,0.1535 3.01031,0.4277 0.57205,0.1625 0.92017,0.7306 1.50515,0.8553 0.81123,0.1728 1.67241,0 2.50861,0 1.33791,0 2.67583,0 4.01374,0 2.34136,0 4.68271,0 7.02406,0 0.66896,0 1.34124,0.057 2.00688,0 1.01223,-0.086 2.01279,-0.2576 3.01031,-0.4277 2.91242,-0.4965 4.80923,-0.5201 7.02406,-2.1382 0.45783,-0.3345 0.85718,-0.7843 1.00343,-1.2829 0.20281,-0.6915 0,-1.4255 0,-2.1382 0,-0.1038 0.0161,-1.2692 0,-1.283 -0.0227,-0.019 -2.27202,0 -2.50859,0 -0.16725,0 -0.38346,-0.1008 -0.50171,0 -0.11826,0.1008 0,0.2851 0,0.4277 0,0.2851 0,0.5702 0,0.8553 0,0.1425 0,0.285 0,0.4276 0,0.2851 -0.17728,0.6135 0,0.8553 2.18685,2.9824 3.4712,3.0119 7.02405,5.1317 1.86351,1.1119 3.63949,2.3289 5.5189,3.4212 8.13167,4.7257 3.09505,0.9275 9.53266,6.4146 1.6724,1.4255 3.40342,2.8027 5.01719,4.2765 0.73066,0.6673 1.56375,1.3072 2.00687,2.1382 0.42096,0.7894 0.40049,1.7031 0.50172,2.5659 0.0666,0.5673 0,1.1403 0,1.7105 0,0.4277 0.22438,0.9005 0,1.283 -0.31733,0.5409 -0.92777,0.9314 -1.50516,1.2829 -1.77437,1.0803 -3.66184,2.0194 -5.5189,2.9935 -9.14081,4.7946 -6.42477,4.1424 -18.06187,5.5594 -1.15891,0.1411 -2.34135,0 -3.51203,0 -0.22596,0 -1.35247,0.065 -1.50516,0 -0.21153,-0.09 -0.29017,-0.3375 -0.50171,-0.4277 -0.14959,-0.064 -0.35214,0.064 -0.50172,0 -0.21155,-0.09 -0.27735,-0.3639 -0.50171,-0.4276 -0.80901,-0.2299 -1.72145,-0.1481 -2.5086,-0.4277 -6.18787,-2.1976 -0.66896,-1.6511 -7.52579,-2.1382 -0.66664,-0.047 -1.33791,0 -2.00687,0 -0.33447,0 -0.70427,-0.1275 -1.00344,0 -0.0536,0.023 0.10396,1.622 0,1.7106 -0.11824,0.1008 -0.38346,-0.1008 -0.50171,0 -0.11826,0.1008 0.11825,0.3269 0,0.4276 -0.11826,0.1008 -0.33449,0 -0.50172,0 -0.33449,0 -0.66896,0 -1.00344,0 -0.50172,0 -1.02562,0.1258 -1.50516,0 -3.87278,-1.0156 -8.60148,-3.2381 -12.04124,-4.704 -2.34135,-0.9979 -4.58084,-2.1926 -7.02406,-2.9935 -0.38839,-0.1274 -9.3142,-1.9994 -10.5361,-2.1383 -1.6629,-0.189 -3.43657,-0.078 -5.01719,0.4277 -0.7003,0.2238 -1.31245,0.6185 -2.00686,0.8553 -0.98205,0.3348 -2.04741,0.4822 -3.01031,0.8553 -0.88776,0.3439 -1.56255,1.0813 -2.50861,1.2829 -1.13571,0.242 -2.34133,0 -3.51202,0 -0.22595,0 -1.35245,0.065 -1.50514,0 -0.21156,-0.09 -0.29019,-0.3375 -0.50173,-0.4277 -0.47303,-0.2015 -1.00343,-0.2851 -1.50515,-0.4276 -0.50172,-0.1425 -0.99665,-0.3038 -1.50516,-0.4276 -0.66303,-0.1615 -1.32155,-0.3628 -2.00688,-0.4277 -1.16351,-0.1103 -2.34134,0 -3.51202,0 -0.14027,0 -2.43011,0.034 -2.50859,0 -4.86794,-2.0746 7.18229,0.5051 -4.51548,-1.7106 -4.97537,-0.9424 -5.3928,-0.6316 -10.03438,-1.7105 -0.36078,-0.084 -0.64867,-0.3269 -1.00343,-0.4277 -0.65416,-0.1858 -1.36666,-0.2094 -2.00688,-0.4276 -0.68686,-0.2342 -0.84912,-1.3818 -1.00345,-1.7106 -0.13888,-0.296 -0.42837,-0.5427 -0.5017,-0.8553 -0.10056,-0.4286 0,-2.009 0,-2.5659 0,-0.5702 -0.21156,-1.1696 0,-1.7105 0.14958,-0.3825 0.68698,-0.5556 1.00343,-0.8553 1.18927,-1.1263 2.25494,-2.3497 3.51203,-3.4212 1.20942,-1.0308 3.46686,-2.3328 5.01718,-2.9935 0.47303,-0.2016 1.00345,-0.2851 1.50516,-0.4276 1.00343,-0.2851 1.96699,-0.7071 3.01032,-0.8553 0.98978,-0.1406 2.00689,0 3.01033,0 0.83618,0 1.67238,0 2.50857,0 0.66897,0 1.34202,-0.063 2.00689,0 0.84754,0.08 1.66441,0.3248 2.50858,0.4276 1.03662,0.1263 8.72339,0.8093 9.53266,0.8553 1.62462,0.092 3.37672,0 5.01719,0 0.33448,0 0.67231,-0.04 1.00344,0 8.82297,1.0743 -6.88427,-0.2697 7.02405,0.4277 1.34601,0.067 2.67724,0.2757 4.01375,0.4276 3.68074,0.4183 7.33886,1.0048 11.03781,1.2829 1.99911,0.1504 4.01375,0 6.02063,0 1.50516,0 3.0103,0 4.51547,0 0.22594,0 1.35245,0.065 1.50515,0 0.21154,-0.09 0.35397,-0.2702 0.50172,-0.4276 2.39824,-2.5552 0.73376,-0.7738 2.50858,-3.4212 0.33449,-0.4276 0.66897,-0.8552 1.00344,-1.2829 0.33449,-0.2851 0.74105,-0.5198 1.00344,-0.8553 0.0928,-0.1186 -0.11826,-0.3268 0,-0.4276 0.11825,-0.1008 0.33448,0 0.50172,0 0.33448,0 0.66895,0 1.00344,0 2.17411,0 4.34823,0 6.52234,0 1.50516,0 3.0103,0 4.51547,0 3.10895,0 5.95843,-0.1417 9.03092,0.4276 4.2427,0.7862 8.31237,2.1614 12.54297,2.9935 0.11979,0.024 2.27415,0.066 2.50861,0 0.35475,-0.1008 0.71615,-0.2236 1.00343,-0.4276 0.72677,-0.5162 1.30685,-1.1682 2.00687,-1.7106 1.1409,-0.884 2.29963,-1.7539 3.51204,-2.5659 1.13122,-0.7576 2.49474,-1.2711 3.51202,-2.1382 0.23652,-0.2016 -0.14957,-0.6003 0,-0.8553 0.0748,-0.1275 0.38346,0.1008 0.50172,0 0.11826,-0.1008 0,-0.2851 0,-0.4276 0,-0.1037 0.0161,-1.2692 0,-1.2829 -0.26443,-0.2254 -0.66895,-0.2851 -1.00344,-0.4277 -2.05052,-0.8739 -0.62948,-0.4276 -4.51548,-0.4276 -3.17754,0 -6.35509,0 -9.53264,0 -0.77824,0 -7.64951,-0.4194 -10.03437,0.4276 -5.21476,1.852 -1.81335,1.7106 -4.51546,1.7106 -0.33449,0 -0.67895,0.069 -1.00344,0 -0.51308,-0.1093 -1.00343,-0.2851 -1.50515,-0.4276 -1.83374,-0.5211 -5.22412,-1.5572 -7.02407,-1.7106 -1.99691,-0.1702 -4.01374,0 -6.02062,0 -4.51547,0 -9.03094,0 -13.54641,0 -2.84307,0 -5.68614,0 -8.52921,0 -1.17068,0 -2.34136,0 -3.51203,0 -0.50173,0 -1.00848,-0.06 -1.50517,0 -7.36769,0.8971 8.94351,0.3234 -8.52921,0.8553 -12.41742,0.378 -2.71515,-0.817 -14.04813,1.2829 -1.66657,0.3088 -3.34478,0.5702 -5.01717,0.8553 -0.83621,0.1425 -1.66441,0.3248 -2.50859,0.4276 -0.49669,0.06 -1.00345,0 -1.50516,0 -0.16724,0 -0.42693,0.1275 -0.50171,0 -0.0589,-0.1005 0,-1.4296 0,-1.7105 0,-0.3058 -0.0856,-2.347 0,-2.5659 0.0748,-0.1913 0.35397,-0.2702 0.50171,-0.4277 0.52237,-0.5565 0.77634,-1.3611 1.50516,-1.7105 5.95394,-2.8547 6.96081,-2.1383 13.5464,-2.1383 3.01031,0 6.02061,0 9.03092,0 0.66897,0 1.34125,-0.057 2.00688,0 5.21378,0.4444 10.27385,2.1036 15.05158,3.8488 1.85735,0.6785 3.74827,1.3082 5.51889,2.1383 4.39716,2.0613 3.68221,2.7376 8.02749,3.8488 0.64076,0.1638 1.33793,0 2.00688,0 2.00688,0 4.01376,0 6.02063,0 6.18785,0 12.37573,0 18.56358,0 1.17067,0 2.34135,0 3.51204,0 0.50172,0 1.00343,0 1.50515,0 0.16723,0 0.33448,0 0.50171,0 0.16724,0 0.38347,-0.1008 0.50172,0 0.26443,0.2253 0.23729,0.6298 0.50172,0.8552 0.42638,0.3635 1.15467,0.4371 1.50515,0.8553 0.52348,0.6247 0.63078,1.4394 1.00345,2.1383 0.81935,1.5364 2.01966,3.0371 2.50859,4.704 0.0811,0.2766 0,0.5702 0,0.8553 0,0.8553 0,1.7106 0,2.5659 0,0.1425 0,0.2851 0,0.4276 0,0.1426 -0.0749,0.3002 0,0.4277 0.34408,0.5865 2.46106,1.2604 2.50859,1.2829 0.85246,0.4037 1.57456,1.0441 2.5086,1.2829 0.80093,0.2048 1.67239,0 2.5086,0 0.5017,0 1.00343,0 1.50515,0 0.66896,0 1.33792,0 2.00687,0 0.8362,0 1.67884,0.089 2.50859,0 1.2646,-0.1347 3.80016,-1.4888 4.51546,-1.7105 0.80143,-0.2484 1.66744,-0.3082 2.50861,-0.4277 0.16496,-0.024 0.38346,-0.1008 0.50171,0 0.71181,0.6067 0.50172,1.3926 0.50172,2.1382 0,0.5702 0,1.1404 0,1.7106 0,0.2851 0.10577,0.5848 0,0.8553 -0.0749,0.1913 -0.32002,0.2986 -0.50172,0.4277 -2.56537,1.8221 -2.91898,2.2563 -6.52232,2.9935 -7.60358,1.5554 -7.38646,1.2829 -14.04813,1.2829 -0.83621,0 -1.67241,0 -2.50861,0 -2.42078,0 -3.1643,0.2254 -5.51889,-0.8553 -1.26669,-0.5814 -2.31501,-1.458 -3.51203,-2.1382 -3.57694,-2.0326 -4.69166,-1.9012 -7.02407,-5.1317 -0.25984,-0.36 -1.37383,-3.4929 -1.50515,-4.2765 -0.071,-0.4233 0,-0.8553 0,-1.2829 0,-0.1426 0.11825,-0.3269 0,-0.4277 -0.11827,-0.1008 -0.38346,-0.1008 -0.50172,0 -0.11827,0.1008 0.0861,0.3054 0,0.4277 -0.43023,0.6111 -0.97566,1.1589 -1.50517,1.7106 -0.97636,1.0171 -2.06368,1.9561 -3.01031,2.9935 -1.39652,1.5304 -2.68192,3.1322 -4.01374,4.7041 -0.84231,0.994 -1.99214,1.849 -2.50858,2.9935 -0.36023,0.7982 0,1.7105 0,2.5658 0,1.9122 -0.47303,1.3074 0.5017,2.1382 0.50173,0.4277 1.00345,0.8553 1.50516,1.283 0.16724,0.7127 -0.0532,1.5863 0.50172,2.1382 0.58612,0.5828 1.72665,0.4744 2.50859,0.8553 0.4107,0.2 0.56424,0.7055 1.00343,0.8553 0.17295,0.059 3.69733,0 4.01377,0 0.12166,0 1.489,0.014 1.50515,0 0.11825,-0.1008 0,-0.2851 0,-0.4277 0,-0.1425 0,-0.2851 0,-0.4276 0,-1.568 0,-3.1361 0,-4.7041 0,-0.2851 0,-0.5702 0,-0.8553 0,-0.4276 0.13783,-0.8717 0,-1.2829 -0.20548,-0.613 -0.70883,-1.1246 -1.00343,-1.7106 -0.20833,-0.4143 -0.20837,-0.9079 -0.50172,-1.2829 -0.0928,-0.1187 -0.33448,0 -0.50174,0 -0.50171,0 -1.00342,0 -1.50514,0 -2.46825,0 -5.14365,-0.2492 -7.52579,0.4276 -2.06254,0.586 -4.05579,1.3449 -6.02062,2.1382 -1.21852,0.492 -2.55862,0.898 -3.51201,1.7106 -0.62341,0.5314 -0.50173,2.2827 -0.50173,2.9935 0,0.2851 0,0.5702 0,0.8553 0,0.1426 -0.0529,0.2924 0,0.4276 1.24316,3.1789 4.94957,2.5659 8.02749,2.5659 0.79485,0 1.35559,0.1275 2.00687,-0.4276 0.59127,-0.504 1.21156,-1.0432 1.50516,-1.7106 0.23488,-0.5339 0,-1.1404 0,-1.7106 0,-0.4276 0,-0.8553 0,-1.2829 0,-1.2829 0.21287,-2.5788 0,-3.8488 -0.0335,-0.1996 -0.33448,-0.2851 -0.50171,-0.4277 -0.66896,-0.5701 -1.29491,-1.1795 -2.00688,-1.7105 -0.6293,-0.4694 -1.27592,-0.9368 -2.00688,-1.283 -3.47349,-1.6448 -7.72227,-1.2829 -11.53953,-1.2829 -0.5017,0 -1.00343,0 -1.50515,0 -0.33448,0 -0.69288,-0.1059 -1.00344,0 -0.55986,0.1909 -0.95091,0.6528 -1.50515,0.8553 -7.41655,2.7092 2.78594,-1.7846 -3.51203,1.2829 -0.17036,2.4544 -1.70306,0.512 -2.5086,0.8553 -0.21153,0.09 -0.26521,0.4277 -0.50171,0.4277 -0.16723,0 0,-0.2851 0,-0.4277 0,-0.1425 0,-0.2851 0,-0.4276 0,-0.3366 0.0403,-2.1039 0,-2.1382 -0.11827,-0.1008 -0.33448,0 -0.50172,0 -0.16724,0 -0.36256,-0.079 -0.50173,0 -0.39357,0.2236 -0.66895,0.5701 -1.00343,0.8552 -1.28223,1.093 -1.98029,1.4175 -2.5086,2.9935 -0.13782,0.4112 0,0.8553 0,1.283 0,0.2851 -0.10576,0.5848 0,0.8553 0.0749,0.1912 0.29891,0.3239 0.50173,0.4276 0.64133,0.328 1.27349,0.7303 2.00687,0.8553 3.34136,0.5696 7.66485,0.4276 11.03781,0.4276 0.50172,0 1.00847,0.06 1.50515,0 0.92749,-0.1128 2.88858,-0.4858 3.51204,-1.2829 0.58285,-0.7452 0.50172,-1.7253 0.50172,-2.5659 0,-0.2953 0.0763,-1.5805 0,-1.7105 -0.48737,-0.8309 -1.64371,-0.4277 -2.5086,-0.4277 -1.50516,0 -3.01031,0 -4.51547,0 -2.38083,0 -1.40854,0.255 -3.0103,-0.4276 -0.33448,-0.1426 -0.73901,-0.2023 -1.00345,-0.4277 -0.11825,-0.1008 0,-0.2851 0,-0.4276 0,-0.1426 0,-0.2851 0,-0.4276 0,-0.3671 -0.0978,-2.3157 0,-2.5659 0.0748,-0.1913 0.33448,-0.2851 0.50174,-0.4277 0,-0.4276 0,-0.8552 0,-1.2829 0,-0.2782 0.23649,-1.2043 -0.50174,-1.2829 -1.16162,-0.1237 -2.34136,0 -3.51202,0 -0.66896,0 -1.33791,0 -2.00688,0 -1.00343,0 -2.01854,-0.1301 -3.01032,0 -2.44486,0.3206 -8.70247,2.5493 -10.03436,2.9935 -5.80395,1.9358 -3.94237,0.8642 -8.02749,3.8488 -1.08069,0.7895 -1.00345,1.9053 -1.00345,2.9935 0,0.1425 0,0.2851 0,0.4276 0,0.1426 0.11826,0.3269 0,0.4277 -0.11825,0.1008 -0.38345,-0.1008 -0.50172,0 -0.11826,0.1008 0.11827,0.3268 0,0.4276 -0.11826,0.1008 -0.38346,-0.1008 -0.50171,0 -0.11826,0.1008 0.11825,0.3269 0,0.4277 -0.0125,0.011 -2.32011,0 -2.50861,0 -0.33446,0 -0.67544,0.056 -1.00341,0 -1.10922,-0.1891 -2.96242,-0.8908 -3.51204,-1.7106 -0.33191,-0.4951 0.16224,-1.1574 0,-1.7106 -0.1814,-0.6184 -0.76693,-1.1058 -1.00344,-1.7106 -0.50172,-1.2829 0.25085,-0.4276 0,-1.2829 -0.12826,-0.4373 -0.37345,-0.8456 -0.50172,-1.2829 -0.0406,-0.1383 0.11825,-0.3269 0,-0.4277 -0.11826,-0.1008 -0.33449,0 -0.50172,0 -1.05405,0 -0.15912,-0.1008 -1.50515,0.8553 -0.64239,0.4563 -1.25896,0.9642 -2.00687,1.283 -0.29918,0.1274 -0.66897,0 -1.00344,0 -0.33448,0 -0.66896,0 -1.00345,0 -0.66895,0 -1.3509,0.1117 -2.00686,0 -2.77302,-0.4728 -0.62554,-0.4277 -2.00689,-0.4277 -0.16723,0 -0.38345,-0.1008 -0.50172,0 -0.26441,0.2254 -0.29428,0.5901 -0.50171,0.8553 -0.7282,0.931 -1.63056,2.1738 -3.01032,2.5659 -0.15866,0.045 0.0748,-0.3002 0,-0.4277 -0.10578,-0.1803 -0.41388,-0.2405 -0.50172,-0.4276 -0.70452,-1.5013 -0.50171,-2.2152 -0.50171,-3.8488 0,-0.2851 0,-0.5702 0,-0.8553 0,-0.1426 0.0749,-0.3002 0,-0.4277 -0.10578,-0.1803 -0.39595,-0.2473 -0.50173,-0.4276 -0.0748,-0.1275 0,-0.2851 0,-0.4276 0,-0.1426 -0.11824,-0.3269 0,-0.4277 0.11825,-0.1008 0.3345,0 0.50173,0 0.33447,0 0.69287,0.1059 1.00343,0 0.55987,-0.1909 1.00344,-0.5702 1.50517,-0.8553 1.33792,-0.2851 2.69281,-0.5175 4.01376,-0.8553 2.0262,-0.5181 3.99682,-1.1855 6.0206,-1.7105 1.82421,-0.4733 3.70994,-0.769 5.51892,-1.283 1.70878,-0.4855 3.37741,-1.0752 5.01718,-1.7105 0.21532,-0.083 0.39595,-0.2474 0.50172,-0.4277 0.0748,-0.1275 0,-0.2851 0,-0.4276 0,-0.2851 0.23652,-0.6537 0,-0.8553 -0.23651,-0.2016 -0.67894,0.069 -1.00344,0 -0.3628,-0.077 -0.66896,-0.2851 -1.00344,-0.4277 -1.67239,-0.1425 -3.3378,-0.3704 -5.01718,-0.4276 -2.5066,-0.085 -5.01719,0 -7.52579,0 -2.50857,0 -5.01718,0 -7.52579,0 -0.83619,0 -1.67751,-0.079 -2.50859,0 -1.01114,0.096 -2.64727,1.2099 -2.00688,-0.4277 0.0748,-0.1912 0.30927,-0.3104 0.50172,-0.4276 0.98136,-0.5975 1.99781,-1.1522 3.01032,-1.7106 1.83072,-1.0097 3.51468,-2.2613 5.51892,-2.9935 2.94814,-1.0769 12.55991,-3.0901 16.05499,-3.4211 1.9946,-0.1889 4.01375,0 6.02063,0 1.50515,0 3.0155,-0.1066 4.51545,0 0.52704,0.037 1.01413,0.2602 1.50517,0.4276 1.18256,0.4032 2.39865,0.7557 3.51202,1.2829 0.4135,0.1958 0.54862,0.7446 1.00345,0.8553 0.80401,0.1958 1.67239,0 2.50859,0 1.33792,0 2.67584,0 4.01375,0 0.8362,0 1.67751,0.079 2.50858,0 1.80176,-0.1706 6.46713,-1.8534 7.02406,-2.1382 1.01405,-0.5186 1.7175,-1.389 2.50861,-2.1382 0.71636,-0.6785 1.47558,-1.3457 2.00686,-2.1382 0.57435,-0.8568 -0.64263,-0.7953 0.50173,-1.283 0.18287,-0.078 2.2195,0 2.50858,0 2.67584,0 5.35168,0 8.02751,0 0.8362,0 1.67239,0 2.50859,0 0.33448,0 0.69289,0.1059 1.00343,0 0.55987,-0.1908 0.95093,-0.6528 1.50516,-0.8553 0.6338,-0.2315 1.33072,-0.3123 2.00688,-0.4276 2.43928,-0.4158 5.68064,-0.75 8.02749,-0.8553 1.50308,-0.067 3.01031,0 4.51546,0 0.50173,0 1.01028,0.07 1.50517,0 0.52165,-0.074 0.99207,-0.3183 1.50515,-0.4276 0.16224,-0.035 0.35215,0.064 0.50173,0 0.21152,-0.09 0.29018,-0.3375 0.50171,-0.4277 0.14959,-0.064 0.33946,0.035 0.50172,0 0.51306,-0.1094 0.98162,-0.3639 1.50516,-0.4276 0.66222,-0.081 1.33792,0 2.00687,0 0.50171,0 1.00343,0 1.50515,0 1.33793,0 2.67585,0 4.01376,0 2.3437,0 3.12195,-0.1171 5.51889,0.4276 1.53302,0.3485 2.97628,0.955 4.51548,1.283 4.633,0.9872 8.6001,0.7325 12.54296,3.4211 0.65296,0.4453 1.21154,1.0432 1.50517,1.7106 0.23488,0.5339 0,1.1404 0,1.7106 0,1.2829 0,2.5658 0,3.8488 0,0.285 0,0.5701 0,0.8552 0,0.1426 -0.11828,0.3269 0,0.4277 0.11824,0.1008 0.33446,0 0.50171,0 0.66895,0 1.33791,0 2.00685,0 0.33449,0 0.70428,-0.1275 1.00346,0 0.42309,0.1803 0.61853,0.6209 1.00343,0.8553 0.79352,0.4831 1.78975,0.7213 2.50861,1.2829 2.93473,2.293 5.31035,5.3062 6.52233,8.5529 0.50961,1.3651 0.31611,2.8526 0.5017,4.2764 0.60546,4.6445 0.50173,1.9519 0.50173,5.5594 0,0.2851 0.14959,0.6003 0,0.8553 -0.37396,0.6375 -0.91386,1.2066 -1.50515,1.7106 -2.25928,1.9257 -4.71724,3.675 -7.02405,5.5593 -1.7076,1.3949 -3.28816,2.901 -5.0172,4.2765 -0.78283,0.6228 -1.50011,1.4036 -2.50859,1.7106 -1.43182,0.4358 -7.55263,0.5602 -9.03093,0.4276 -1.69615,-0.1522 -3.57091,-0.085 -5.01718,-0.8553 -1.4182,-0.7555 -2.10597,-2.2221 -3.01033,-3.4211 -0.60665,-0.8044 -1.27009,-1.6309 -1.50514,-2.5659 -0.28034,-1.1151 0,-2.2808 0,-3.4212 0,-2.2807 0,-4.5615 0,-6.8423 0,-0.4014 0.0958,-1.8931 0,-2.1382 -0.0748,-0.1912 -0.45534,-0.23 -0.50173,-0.4276 -0.1312,-0.5591 0,-1.1404 0,-1.7106 0,-1.4255 0,-2.851 0,-4.2764 0,-1.283 0,-2.5659 0,-3.8488 0,-0.4277 0,-0.8553 0,-1.283 0,-0.1425 0,-0.2851 0,-0.4276 0,-0.1426 0.0748,-0.3002 0,-0.4277 -0.10577,-0.1803 -0.29018,-0.3375 -0.50172,-0.4276 -0.14959,-0.064 -0.33447,0 -0.50171,0 -0.33449,0 -0.66897,0 -1.00343,0 -2.94408,0 -3.04654,-0.3395 -6.02064,1.2829 -3.24286,1.769 -6.48093,3.5585 -9.53265,5.5594 -1.31225,0.8604 -2.59367,1.8193 -3.51202,2.9935 -0.60011,0.7673 -0.50173,2.4647 -0.50173,3.4212 0,0.2851 -0.0812,0.5787 0,0.8553 0.0907,0.3092 0.26812,0.6063 0.50173,0.8552 1.11056,1.1833 2.25495,2.3497 3.51202,3.4212 1.37226,1.1696 3.08666,1.8851 5.01719,2.1382 1.15706,0.1517 2.34134,0 3.51203,0 0.33448,0 0.69288,0.1059 1.00343,0 0.55986,-0.1909 1.0292,-0.5397 1.50516,-0.8553 1.03104,-0.6835 2.30399,-1.2017 3.01032,-2.1382 0.85793,-1.1375 1.17272,-2.5265 1.50516,-3.8488 0.1752,-0.6969 0,-1.4255 0,-2.1382 0,-0.2851 0.2007,-0.6272 0,-0.8553 -0.82135,-0.9334 -2.88439,-1.2142 -4.01377,-1.2829 -1.50132,-0.091 -3.0103,0 -4.51545,0 -1.00344,0 -2.01854,-0.1301 -3.01031,0 -3.41933,0.4483 -5.62051,1.7047 -8.52922,3.4211 -0.69231,0.4085 -2.33079,1.5103 -1.50515,2.5659 0.18553,0.2372 0.66895,0 1.00343,0 0.33448,0 0.66895,0 1.00343,0 0.33449,0 0.67546,0.056 1.00344,0 2.22706,-0.3797 5.21275,-2.3114 6.52234,-2.9935 1.34626,-0.7013 2.76836,-1.3126 4.01376,-2.1382 0.21327,-0.1414 0.71836,-1.0983 0.50171,-1.283 -0.11826,-0.1008 -0.33448,0 -0.50171,0 -0.50172,0 -1.00344,0 -1.50516,0 -0.50172,0 -1.00344,0 -1.50516,0 -1.00344,0 -2.04919,-0.2457 -3.01032,0 -0.80092,0.2048 -1.1989,1.0993 -2.00687,1.283 -1.78485,0.4056 -3.69025,0.2049 -5.51889,0.4276 -0.52357,0.064 -0.9763,0.4276 -1.50516,0.4276 -0.0258,0 0.0322,-1.2007 0,-1.2829 -0.45512,-1.1637 -0.79349,-1.1785 -2.50861,-1.2829 -1.66814,-0.1016 -3.34478,0 -5.01717,0 -1.17068,0 -2.34136,0 -3.51204,0 -1.17066,0 -2.36733,-0.2091 -3.51203,0 -1.24538,0.2275 -2.36097,0.8182 -3.51202,1.2829 -2.02776,0.8187 -4.23587,1.4068 -6.02063,2.5659 -1.7897,1.1622 -3.23476,2.6996 -4.51546,4.2764 -0.28558,0.3516 0,0.8553 0,1.2829 0,0.1426 0,0.2851 0,0.4277 0,0.1425 -0.11826,0.3268 0,0.4276 0.11825,0.1008 0.33446,0 0.50171,0 0.33449,0 0.67546,0.056 1.00343,0 3.0528,-0.5204 3.35471,-2.3557 3.01032,-4.704 -0.0463,-0.3163 -0.22028,-0.6454 -0.50171,-0.8553 -1.0827,-0.8075 -2.18971,-1.6552 -3.51204,-2.1383 -1.08695,-0.397 -2.33151,-0.3684 -3.51202,-0.4276 -2.33732,-0.1173 -4.68271,0 -7.02408,0 -0.33446,0 -0.66894,0 -1.00342,0 -0.33449,0 -0.70427,0.1275 -1.00344,0 -0.14959,-0.064 0,-0.2851 0,-0.4276 0,-0.1426 -0.0749,-0.3002 0,-0.4277 0.10578,-0.1803 0.33448,-0.2851 0.50173,-0.4276 0.66894,-0.5702 1.18546,-1.3105 2.00685,-1.7106 2.3127,-1.1264 8.01674,-2.564 10.53611,-2.9935 1.485,-0.2532 3.03711,-0.1476 4.51547,-0.4277 0.16324,-0.031 0.11824,-0.3268 0,-0.4276 -0.11826,-0.1008 -0.34306,0.045 -0.50173,0 -0.35477,-0.1008 -0.64387,-0.3401 -1.00343,-0.4276 -0.81995,-0.1997 -1.65749,-0.3824 -2.50861,-0.4277 -1.83605,-0.098 -3.68393,-0.1118 -5.5189,0 -0.52752,0.032 -1.02497,0.2387 -1.50516,0.4277 -1.69769,0.6678 -3.48538,1.2242 -5.01718,2.1382 -0.27401,0.1635 -0.18553,0.618 0,0.8553 0.20745,0.2652 0.65972,0.302 1.00343,0.4276 3.21093,1.1729 1.86353,0.8553 5.51891,0.8553 0.66895,0 1.34124,0.057 2.00688,0 3.1072,-0.2649 5.58327,-0.9724 8.52922,-2.1382 2.91776,-1.1547 5.9115,-2.2551 8.52921,-3.8488 0.98134,-0.5975 1.3677,-1.6942 2.00688,-2.5659 0.1982,-0.2703 0.38347,-0.5529 0.50171,-0.8553 0.14204,-0.3632 -0.2947,-1.1065 0,-0.8553 0.26443,0.2254 0.23729,0.6299 0.50172,0.8553 0.74369,0.6339 4.14177,3.0858 5.5189,3.4212 1.45615,0.3546 3.00491,0.3356 4.51548,0.4276 0.83406,0.051 1.70765,0.2048 2.5086,0 2.01599,-0.5155 3.44869,-1.9923 4.51545,-3.4211 0.60231,-0.8068 0.92796,-1.7459 1.50515,-2.5659 0.43022,-0.6112 0.98279,-1.154 1.50517,-1.7106 0.14774,-0.1574 0.29017,-0.3375 0.50172,-0.4276 0.14957,-0.064 0.50172,-0.1426 0.50172,0 0,0.2016 -0.39595,0.2473 -0.50172,0.4276 -0.56959,0.971 -0.79867,2.0902 -1.50516,2.9935 -0.98615,1.2608 -2.25494,2.3497 -3.51203,3.4212 -4.87677,4.1567 -5.4128,5.27 -12.54296,5.5594 -1.21615,0.049 -2.69304,-0.088 -3.51204,-0.8553 -1.06724,-1.0007 -1.05746,-2.5515 -1.50515,-3.8488 -0.17775,-0.5152 -1.61422,-5.7453 -2.00688,-6.4147 -0.4789,-0.8164 -1.24967,-1.4928 -2.00688,-2.1382 -2.69443,-2.2966 -3.78349,-2.8033 -7.02405,-4.2764 -1.31985,-0.6 -2.67584,-1.1404 -4.01374,-1.7106 -0.66898,-0.2851 -1.2813,-0.7007 -2.00689,-0.8553 -0.64897,-0.1383 -1.33792,0 -2.00686,0 -0.3345,0 -0.66896,0 -1.00345,0 -0.33447,0 -0.68611,-0.09 -1.00343,0 -0.72889,0.2071 -1.42172,2.4236 -1.50516,2.5659 -0.10577,0.1803 -0.2652,0.4276 -0.50172,0.4276 -0.16723,0 0,-0.2851 0,-0.4276 0,-0.5702 0,-1.1404 0,-1.7106 0,-0.2851 0.0811,-0.5787 0,-0.8553 -0.57595,-1.9637 -4.022,-2.8853 -6.02062,-2.5659 -1.61891,0.2588 -3.06947,1.0383 -4.51548,1.7106 -5.41433,2.5173 -7.29031,3.6481 -11.53952,7.27 -1.76052,1.5005 -3.11104,2.2224 -2.50859,4.2764 0.0405,0.1383 0.33448,0 0.50172,0 0.66897,0 1.33793,0 2.00687,0 0.66897,0 1.37225,0.1803 2.00688,0 0.44874,-0.1275 0.64988,-0.5874 1.00344,-0.8553 1.15241,-0.8731 2.53566,-1.5487 3.51203,-2.5659 0.5703,-0.5941 0.71863,-1.4099 1.00343,-2.1382 0.52907,-1.3528 1.12822,-2.5127 -1.00343,-3.4211 -1.98145,-0.8445 -8.60235,1.77 -9.53267,2.1382 -3.05264,1.208 -6.04699,2.5218 -9.03093,3.8488 -0.86455,0.3845 -1.71507,0.7998 -2.50859,1.2829 -0.38491,0.2344 -0.74105,0.5198 -1.00342,0.8553 -0.0928,0.1186 -0.1496,0.3639 0,0.4276 0.29916,0.1275 0.67544,0.056 1.00342,0 0.51859,-0.088 1.10715,-0.1308 1.50517,-0.4276 1.72803,-1.2888 2.95921,-2.8193 3.51202,-4.7041 0.12168,-0.4149 0,-0.8553 0,-1.2829 0,-0.1426 0.11825,-0.3269 0,-0.4277 -0.65129,-0.5551 -1.21202,-0.4276 -2.00688,-0.4276 -1.00343,0 -2.00687,0 -3.01031,0 -0.50172,0 -1.02917,-0.1353 -1.50516,0 -0.57204,0.1625 -0.9658,0.6254 -1.50513,0.8553 -1.80743,0.7703 -3.69269,1.4009 -5.51893,2.1382 -1.35184,0.5458 -2.65824,1.1714 -4.01376,1.7106 -1.15417,0.4591 -2.31945,0.9017 -3.51203,1.2829 -0.15658,0.05 -0.38345,-0.1008 -0.5017,0 -0.11826,0.1008 0,0.2851 0,0.4277 0,0.285 0,0.5701 0,0.8552 0,0.2852 0,0.5702 0,0.8553 0,0.2851 -0.0811,0.5787 0,0.8553 0.14994,0.5113 0.94982,1.5213 1.50515,1.7106 0.46583,0.1588 1.00344,0 1.50515,0 0.16725,0 0.33448,0 0.50172,0 0.16725,0 0.35213,0.064 0.50171,0 0.21154,-0.09 0.33449,-0.2851 0.50172,-0.4276 0.16725,-0.1426 0.39595,-0.2474 0.50173,-0.4277 0.26758,-0.4561 -0.10035,-0.5417 -0.50173,-0.4276 -1.97578,0.5613 -4.68508,3.0242 -6.02061,4.2764 -2.82978,2.6532 -2.5086,1.5452 -2.5086,3.8488 0,0.1425 -0.0748,0.3001 0,0.4276 0.82119,1.4 7.44196,0.8553 7.52578,0.8553 2.90879,0 6.13579,0.2218 9.03096,-0.4276 3.06864,-0.6883 6.02061,-1.7106 9.03092,-2.5659 0.50172,-0.1425 0.98656,-0.3392 1.50515,-0.4276 0.328,-0.056 0.66897,0 1.00345,0 0.16723,0 0.35214,-0.064 0.50172,0 0.21154,0.09 0.29017,0.3375 0.50172,0.4276 3.58112,1.5262 3.48582,0.533 5.5189,3.4212 0.46336,0.6582 0.78499,1.3935 1.00343,2.1382 0.59633,2.0331 0.50171,2.8481 0.50171,4.7041 0,0.1425 0,0.2851 0,0.4276 0,0.1426 0.0749,0.3002 0,0.4277 -0.66845,1.1395 -3.53725,0.3964 -4.01375,0.4276 -1.01426,0.066 -1.99654,0.3557 -3.01029,0.4277 -0.99997,0.071 -2.01697,-0.121 -3.01032,0 -0.61997,0.075 -0.50172,0.5463 -0.50172,0.8552 0,1.1404 0,2.2808 0,3.4212 0,0.2851 0,0.5702 0,0.8553 0,0.2851 -0.14958,0.6003 0,0.8553 0.0135,0.023 1.49159,0.023 1.50515,0 0.14959,-0.255 0,-0.5702 0,-0.8553 0,-0.4282 0.069,-2.468 0,-2.5659 -0.31024,-0.4407 -1.07877,-0.4918 -1.50515,-0.8553 -4.19293,-3.5739 -2.03364,-2.3299 -5.51891,-6.4146 -0.41732,-0.4891 -1.11157,-0.7797 -1.50515,-1.283 -0.0928,-0.1186 0.33448,0 0.50171,0 0.16725,0 0.38347,-0.1008 0.50174,0 0.26441,0.2254 0.25546,0.6154 0.5017,0.8553 2.18581,2.1293 5.78536,4.5991 8.02751,6.4147 1.71471,1.3885 3.34478,2.851 5.01718,4.2764 0.8362,0.7128 1.49456,1.6197 2.50859,2.1382 1.10952,0.5675 3.83177,0.4277 5.01719,0.4277 0.50173,0 1.00344,0 1.50516,0 0.33448,0 0.71105,0.1384 1.00343,0 7.49611,-3.5497 -0.14914,-1.098 6.52235,-2.9935 3.48628,-0.9905 1.95259,-0.8553 4.51545,-0.8553 0.16725,0 0.35215,-0.064 0.50172,0 0.21155,0.09 0.35982,0.2664 0.50172,0.4276 0.86319,0.981 1.71059,1.9733 2.5086,2.9935 1.0123,1.2943 2.62062,3.6924 3.01032,5.1318 0.22562,0.8334 0,1.7106 0,2.5658 0,0.5267 0.0748,0.7916 -0.50173,1.283 -2.10721,1.7961 -2.01355,1.2829 -5.01719,1.2829 -0.66895,0 -1.34463,0.081 -2.00686,0 -2.08466,-0.2538 -3.67875,-1.8527 -5.01718,-2.9935 -4.27814,-3.6465 -7.23219,-6.693 -9.03094,-11.974 -0.60617,-1.7797 0,-3.7063 0,-5.5594 0,-0.6053 -0.22439,-1.6431 0.50171,-2.1382 0.58403,-0.3983 1.33791,-0.5702 2.00688,-0.8553 3.4766,-1.4817 3.42319,-1.937 8.0275,-1.2829 0.46658,0.066 0.64989,0.5874 1.00343,0.8552 2.11803,1.6048 5.26829,3.6547 7.02406,5.5594 0.83302,0.9037 1.31318,2.008 2.00688,2.9935 0.31023,0.4408 0.57705,0.9195 1.00344,1.283 0.11825,0.1008 0,-0.2851 0,-0.4277 0,-0.1425 0,-0.2851 0,-0.4276 0,-0.1426 -0.11827,-0.3269 0,-0.4277 0.11825,-0.1008 0.33947,0.034 0.50172,0 0.51306,-0.1094 0.97892,-0.3828 1.50515,-0.4276 1.16488,-0.099 2.34136,0 3.51203,0 1.00343,0 2.00688,0 3.01031,0 1.00343,0 2.00687,0 3.01031,0 2.9826,0 4.32883,-0.5868 6.52234,1.2829 0.6075,0.5178 0.50172,1.4871 0.50172,2.1382 0,0.1426 0.0749,0.3002 0,0.4277 -0.10578,0.1803 -0.39595,0.2473 -0.50172,0.4276 -0.2365,0.4032 -0.20836,0.9079 -0.50172,1.2829 -0.0928,0.1187 -0.38345,-0.1008 -0.50172,0 -0.11826,0.1008 0,0.2851 0,0.4277 0,0.1425 -0.11826,0.3268 0,0.4276 0.11827,0.1008 0.33448,0 0.50172,0 0.16725,0 0.35214,0.064 0.50172,0 0.21155,-0.09 0.31704,-0.3017 0.50172,-0.4276 2.05834,-1.4035 2.12266,-1.0198 3.51203,-2.9935 0.0861,-0.1223 0.14959,-0.3639 0,-0.4277 -0.55394,-0.236 -2.23304,0.2832 -2.50859,0.4277 -1.73859,0.9119 -3.38406,1.9495 -5.01717,2.9935 -1.71339,1.0953 -3.43843,2.1876 -5.01721,3.4211 -0.0398,0.031 -1.64085,1.595 -1.00343,2.1383 0.23652,0.2016 0.66895,0 1.00343,0 0.33449,0 0.66898,0 1.00344,0 0.33448,0 0.67895,0.069 1.00344,0 0.36279,-0.077 0.64526,-0.3361 1.00343,-0.4277 1.32094,-0.3378 2.76404,-0.3582 4.01375,-0.8553 1.30369,-0.5185 2.34136,-1.4254 3.51204,-2.1382 1.34721,-0.8202 4.25243,-1.7313 3.51204,-2.9935 -0.0749,-0.1275 -0.33449,0 -0.50173,0 -0.33448,0 -0.66896,0 -1.00344,0 -1.17068,0 -2.3485,-0.1101 -3.51203,0 -0.68533,0.065 -1.38144,0.1801 -2.00688,0.4276 -4.07021,1.6108 -7.98341,3.4985 -12.04123,5.1318 -1.96595,0.7913 -4.07605,1.3095 -6.02063,2.1382 -0.57697,0.2459 -1.33126,1.0035 -1.00343,1.2829 0.11824,0.1008 0.33447,0 0.5017,0 0.16724,0 0.33449,0 0.50173,0 1.71295,0 0.76692,0.2016 2.50859,-1.2829 1.66804,-1.4218 3.00109,-2.3344 4.01374,-4.2764 0.20376,-0.3908 0.0825,-0.8612 0,-1.283 -0.087,-0.4446 0,-1.1404 -0.5017,-1.2829 -1.26928,-0.3606 -2.67584,0 -4.01375,0 -0.8362,0 -1.67239,0 -2.50861,0 -1.72603,0 -3.84247,-0.1677 -5.51889,0.4276 -1.2446,0.4421 -2.37451,1.0936 -3.51203,1.7106 -0.62801,0.3407 -2.66546,1.0156 -2.00688,2.1382 0.0748,0.1275 0.33449,0 0.50173,0 0.16723,0 0.36255,0.079 0.5017,0 0.39359,-0.2236 0.60232,-0.6416 1.00345,-0.8553 0.95135,-0.5068 2.15852,-0.6606 3.01032,-1.2829 0.60748,-0.4438 0.50171,-1.5339 0.50171,-2.1382 0,-0.2851 0.18553,-0.6181 0,-0.8553 -0.20744,-0.2652 -0.69229,-0.2508 -1.00344,-0.4276 -1.19704,-0.6802 -2.28679,-1.4956 -3.51204,-2.1383 -4.73841,-2.4854 -1.52544,-0.017 -4.51546,-2.5658 -0.16724,-0.1426 -0.42692,-0.2364 -0.50173,-0.4277 -0.10577,-0.2704 0,-0.5702 0,-0.8553 0,-0.1425 -0.0927,-0.309 0,-0.4276 0.99673,-1.2743 3.94642,-2.2008 5.01719,-2.5659 4.00178,-1.3643 5.15289,-0.8552 10.03437,-0.8552 0.83622,0 1.67241,0 2.50861,0 1.70299,0 2.93027,-0.1729 4.51545,0.4276 0.89113,0.3376 1.71508,0.7998 2.50861,1.2829 1.90147,1.1577 -0.0457,0.8553 2.50859,0.8553 0.16725,0 0.35214,0.064 0.50171,0 1.00433,-0.428 3.50609,-2.1921 4.01377,-2.5658 0.14109,-0.104 9.94291,-6.8809 11.53951,-9.4082 0.68076,-1.0776 0.66867,-3.5642 0,-4.7041 -0.31732,-0.5409 -1.00343,-0.8553 -1.50515,-1.2829 -0.90498,-0.7714 -1.55814,-1.7106 -3.01032,-1.7106 -0.23651,0 0.27227,0.3787 0.50172,0.4276 0.48674,0.1038 1.01318,0.084 1.50517,0 0.36669,-0.062 0.66894,-0.2851 1.00343,-0.4276 1.33791,-0.5702 2.66322,-1.1624 4.01374,-1.7106 6.15127,-2.4967 12.46993,-4.6729 18.5636,-7.2699"
       id="path4733-0-6-6"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-4-6-1)"
       id="path4299-39-4-5-0-1-5-5"
       cx="465.93457"
       cy="599.11572"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-1-5-1)"
       id="path4299-39-4-5-0-9-8-1"
       cx="505.73547"
       cy="593.55566"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-3-2-9)"
       id="path4299-39-4-5-0-8-0-2-7-2"
       cx="484.39941"
       cy="612.14685"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-5-3-6)"
       id="path4299-39-4-5-0-8-0-63-5-2-8-3-5"
       cx="495.31635"
       cy="640.255"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-5-48-1)"
       id="path4299-39-4-5-0-8-0-63-5-2-8-7-8"
       cx="484.33099"
       cy="658.81653"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-9-0)"
       id="path4299-39-4-5-0-8-8-4"
       cx="497.8783"
       cy="593.19849"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-5-35)"
       id="path4299-39-4-5-0-8-0-63-5-2-8-43"
       cx="462.73895"
       cy="645.93713"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-5-4-4)"
       id="path4299-39-4-5-0-8-0-63-5-2-8-2-5"
       cx="496.45276"
       cy="634.19409"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-5-9-4)"
       id="path4299-39-4-5-0-8-0-63-5-2-8-78-4"
       cx="536.60638"
       cy="615.25366"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-2-8-0)"
       id="path4299-39-4-5-0-4-5-8"
       cx="516.80688"
       cy="608.55566"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-7-4-7-6)"
       id="path4299-39-4-5-0-8-0-1-9-8-3"
       cx="520.00726"
       cy="634.1178"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-7-9-2)"
       id="path4299-39-4-5-0-8-0-63-5-2-80"
       cx="481.11639"
       cy="640.17871"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-0-8-8-5)"
       id="path4299-39-4-5-0-8-0-6-0-1-7"
       cx="501.31946"
       cy="624.01624"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-7-0-9-0)"
       id="path4299-39-4-5-0-8-0-1-7-8-9"
       cx="544.25098"
       cy="640.68372"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-6-8-4-7)"
       id="path4299-39-4-5-0-8-0-63-3-3-9"
       cx="505.36005"
       cy="646.74463"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <a
       id="a5831"
       style="display:inline"
       transform="translate(0,-308.26772)">
      <ellipse
         style="opacity:1;fill:#ecac96;fill-opacity:0.788961;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter5829-06-1-7-07-3)"
         id="path4299-39-4-5-0-8-0-1-90-3"
         cx="505.61261"
         cy="619.72302"
         rx="3.5811791"
         ry="3.4490476" />
    </a>
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer5"
     inkscape:label="nuclear RNA"
     style="display:inline"
     @mouseenter="$emit('active', 'RNAseq')">
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 443.80209,585.68026 c 23.95841,3.203 25.92211,8.7284 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.1121 6.14275,9.4901"
       id="path4733-0-2-5-9-3-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 478.12062,563.58996 c 23.95841,3.203 25.92211,8.7284 0.66014,2.734 -9.87868,0.6903 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-8-3-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 527.43809,569.12626 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6043 -25.60386,-1.3166"
       id="path4733-0-2-4-7-7-8-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 515.63543,551.58536 c 23.95841,3.2029 25.92211,8.7283 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-93-2-8-2-4-9-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 454.44965,556.40316 c 23.03437,7.3268 24.00569,13.1098 0.17388,2.8071 -9.84793,-1.0408 -8.82238,1.5999 4.396,10.4148"
       id="path4733-0-2-5-93-2-8-4-5-0-7-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 495.61828,551.70106 c 19.9321,4.3771 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9434 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-4-0-5-8-6-9-5-2-8-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 562.45404,599.90376 c 16.97828,11.3219 15.75591,18.9503 -0.84623,3.6802 -7.99942,-2.108 -13.85815,-9.2751 -23.37448,-10.532"
       id="path4733-0-2-0-4-9-3-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 497.1335,552.45866 c 19.9321,4.3772 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9435 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-4-0-5-8-6-9-5-2-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.27033;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 482.96687,632.42196 c 24.22547,3.6495 0,0 -11.8325,3.1151 -9.9888,0.7866 -12.4312,2.4745 2.28265,9.7417"
       id="path4733-0-2-5-5-2-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 438.47182,641.09566 c 23.95841,3.203 25.92211,8.7284 0.66014,2.734 -9.87868,0.6903 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-7-1-2"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.27033;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 517.31297,599.29946 c 24.22547,3.6495 0,0 -11.8325,3.1151 -9.9888,0.7866 -12.4312,2.4744 2.28265,9.7417"
       id="path4733-0-2-5-5-4-4-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <ellipse
       style="display:inline;opacity:1;fill:#93ac9d;fill-opacity:1;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.823864;filter:url(#filter15116-9)"
       id="path4299-39-4-5-0-8-0-6-3-0-5"
       cx="477.07581"
       cy="617.4502"
       rx="3.5811791"
       ry="3.4490476"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 485.20428,617.35456 c 19.9321,4.3772 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9435 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-1-2-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 563.22566,615.84186 c 23.95841,3.203 25.92211,8.7284 0.66014,2.734 -9.87868,0.6903 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-1-2-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 553.41856,595.21176 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-2-5-6"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 509.48999,647.71176 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-0-8-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 521.30209,618.18026 c 23.95841,3.203 25.92211,8.7284 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.1121 6.14275,9.4901"
       id="path4733-0-2-5-98-5-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 544.15923,646.03746 c 23.95841,3.2029 25.92211,8.7283 0.66014,2.7339 -9.87868,0.6903 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-0-1-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.27033;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 565.8844,606.08516 c 24.22547,3.6495 0,0 -11.8325,3.1151 -9.9888,0.7866 -12.4312,2.4745 2.28265,9.7417"
       id="path4733-0-2-5-5-6-2-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer4"
     inkscape:label="cytosolic RNA"
     style="display:inline"
     @mouseenter="$emit('active', 'RNAseq')">
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 610.17529,666.90956 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-4-0-2-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 480.56143,725.92606 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-4-0-5-4-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 577.47418,729.34726 c 18.86509,7.7817 19.15865,15.5019 -0.10992,3.7747 -8.25724,-0.5024 -15.40485,-6.3849 -24.9832,-5.756"
       id="path4733-0-2-4-0-5-8-63-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 600.3494,703.96176 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-4-0-5-7-7-9"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 362.33041,739.14036 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6043 -25.60386,-1.3166"
       id="path4733-0-2-4-0-5-3-5-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 350.90183,699.14026 c 19.9321,4.3772 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9435 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-4-0-5-8-5-4-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 520.76325,705.65556 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-4-0-5-7-5-4-9"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 338.39476,688.89456 c 23.95841,3.2029 25.92211,8.7284 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-93-2-8-4-9-2-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 433.48723,726.95106 c 18.86509,7.7818 19.15865,15.502 -0.10992,3.7748 -8.25724,-0.5024 -15.40485,-6.385 -24.9832,-5.756"
       id="path4733-0-2-4-0-5-5-3-6"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 390.75819,737.73196 c 23.03437,7.3268 24.00569,13.1098 0.17388,2.8072 -9.84793,-1.0408 -8.82238,1.5998 4.396,10.4148"
       id="path4733-0-2-5-93-2-8-8-4-7"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 478.44553,747.62487 c 18.8651,7.7817 19.15866,15.5019 -0.10992,3.7747 -8.25723,-0.5024 -15.40484,-6.3849 -24.9832,-5.756"
       id="path4733-0-2-4-0-5-8-6-0-5-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 403.89871,745.02066 c 18.86509,7.7818 19.15865,15.502 -0.10992,3.7747 -8.25724,-0.5023 -15.40485,-6.3849 -24.9832,-5.7559"
       id="path4733-0-2-4-0-5-8-6-9-9-5-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 356.38969,746.60406 c 23.03437,7.3268 24.0057,13.1098 0.17388,2.8071 -9.84793,-1.0407 -8.82238,1.5999 4.396,10.4149"
       id="path4733-0-2-5-93-2-9-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 359.1425,753.89456 c 23.95841,3.2029 25.92211,8.7284 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-93-2-8-2-4-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="proteins"
     style="display:inline"
     @mouseenter="$emit('active', 'Proteomics')">
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-4)"
       id="path13437-3-0-78"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,412.99051,266.96254)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-5-5)"
       id="path13437-3-0-76-9"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,428.72626,253.35264)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-9-8)"
       id="path13437-3-0-94-1"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,429.79769,277.99554)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-52-4)"
       id="path13437-3-0-79-80"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,412.65483,292.45984)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-97-9)"
       id="path13437-3-0-3-1"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,442.11911,272.63835)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-0-7)"
       id="path13437-3-0-5-6"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,452.09766,252.76604)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-5-1-2)"
       id="path13437-3-0-76-5-0"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,467.83341,239.15624)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-9-9-6)"
       id="path13437-3-0-94-3-5"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,444.7977,245.04914)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-52-9-9)"
       id="path13437-3-0-79-8-5"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,451.22627,232.72773)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-97-6-0)"
       id="path13437-3-0-3-9-3"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,422.83341,240.22767)" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer3"
     inkscape:label="ribosome"
     style="display:inline"
     @mouseenter="$emit('active', 'RibosomeProfiling')">
    <g
       id="g7956-28-70-1"
       transform="matrix(0.15677159,0,0,0.17774531,367.55969,392.74927)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9)" />
    </g>
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-9)"
       id="path13437-3-9"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,356.40484,284.4241)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 507.26889,792.82792 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4465 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1785 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7137 0.71375,-0.1781 0,0.5357 -0.12627,0.1263 -0.40945,-0.1263 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-0"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-1-3)"
       id="path13437-3-0-6-8"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,351.58053,257.84564)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-7-1)"
       id="path13437-3-0-9-7"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,278.18767,240.70274)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 427.15153,749.10656 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4464 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1785 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7137 0.71375,-0.1781 0,0.5357 -0.12627,0.1263 -0.40945,-0.1263 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-4-8"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 549.29439,738.92796 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2678 0,0.4465 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5358 0,-0.1786 0.17857,-0.5358 0,-0.5358 -0.19965,0 -0.10174,0.425 -0.26786,0.5358 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2679 0,0.7142 -0.0893,-0.089 0.26786,0.2678 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1786 0,0.2679 0,0.089 0.0631,0.2047 0,0.2678 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7138 0.71375,-0.178 0,0.5357 -0.12627,0.1263 -0.40945,-0.1262 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-01-0"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 380.34724,776.43776 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4464 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1786 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7138 0.71375,-0.178 0,0.5357 -0.12627,0.1263 -0.40945,-0.1263 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-53"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-1-4)"
       id="path13437-3-0-7-0"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,274.77623,288.39111)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 424.81153,793.58054 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.4464 0,0.8928 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1786 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2678 0,0.2678 -0.0893,0 0,-0.3571 0,-0.2678 0,0.2678 0,0.5357 0,0.8036 0,0.089 0,0.1785 0,0.2678 0,0.089 0.0631,0.2047 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7137 0.71375,-0.1781 0,0.5357 -0.12627,0.1263 -0.40945,-0.1263 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.1129 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-5-5"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-74-16-1)"
       id="path13437-3-0-0-4"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,329.9548,230.53395)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 478.91868,738.93777 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4464 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1786 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7138 0.71375,-0.178 0,0.5357 -0.12627,0.1263 -0.40945,-0.1263 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-7-4"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 452.59613,778.71786 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4464 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1786 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7138 0.71375,-0.178 0,0.5357 -0.12627,0.1263 -0.40945,-0.1263 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-1-9"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <g
       id="g7956-28-70-1-3"
       transform="matrix(0.15677159,0,0,0.17774531,346.799,390.02503)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-6"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-9)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-6"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-9)" />
    </g>
    <g
       id="g7956-28-70-1-0"
       transform="matrix(0.15677159,0,0,0.17774531,391.79899,406.09646)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2)" />
    </g>
    <g
       id="g7956-28-70-1-0-9"
       transform="matrix(0.15677159,0,0,0.17774531,422.33471,391.09646)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-1"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-0)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-8"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-3)" />
    </g>
    <g
       id="g7956-28-70-1-0-5"
       transform="matrix(0.15677159,0,0,0.17774531,445.37042,352.52503)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-2"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-5)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-5"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-38)" />
    </g>
    <g
       id="g7956-28-70-1-0-6"
       transform="matrix(0.15677159,0,0,0.17774531,488.22756,406.09646)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-5"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-52)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-1"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-2)" />
    </g>
    <g
       id="g7956-28-70-1-0-30"
       transform="matrix(0.15677159,0,0,0.17774531,472.69185,406.63217)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-0"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-7)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-2"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-5)" />
    </g>
    <g
       id="g7956-28-70-1-0-39"
       transform="matrix(0.15677159,0,0,0.17774531,466.799,379.31075)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-7"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-1)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-0"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-1)" />
    </g>
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 501.42387,766.91287 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4465 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1786 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7138 0.71375,-0.178 0,0.5357 -0.12627,0.1263 -0.40945,-0.1262 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-9-3-9"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <g
       id="g7956-8-5-5"
       transform="matrix(0.09684495,0,0,0.10980137,407.45257,422.87604)"
       inkscape:transform-center-x="-45.378117"
       inkscape:transform-center-y="-28.492797">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-4-1-2"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-6-4-7)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-71-8-1"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-9-0-7)" />
    </g>
    <path
       sodipodi:type="star"
       style="opacity:1;fill:#2dc13d;fill-opacity:0.971591;stroke:none;stroke-width:2.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter13515-4-5-70-2)"
       id="path13437-3-0-2-8"
       sodipodi:sides="5"
       sodipodi:cx="604.26678"
       sodipodi:cy="792.38623"
       sodipodi:r1="17.470285"
       sodipodi:r2="17.672956"
       sodipodi:arg1="1.1396909"
       sodipodi:arg2="1.8187047"
       inkscape:flatsided="false"
       inkscape:rounded="0"
       inkscape:randomized="0"
       d="m 611.56719,808.25806 -11.63694,1.26083 -8.50253,-5.2849 -4.79512,-10.67777 2.39881,-9.7195 8.67338,-7.86005 9.98507,-0.72209 10.15558,5.81999 3.7723,9.27323 -2.39689,11.457 z"
       inkscape:transform-center-x="56.25148"
       inkscape:transform-center-y="0.59527683"
       transform="matrix(0.24968148,0,0,0.24953136,400.33053,230.52414)" />
    <path
       style="fill:none;fill-rule:evenodd;stroke:#009800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.829545"
       d="m 521.16756,792.64642 c -0.80357,0 -1.60714,0 -2.41071,0 -0.0893,0 -0.17858,0 -0.26786,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1785 0,0.2678 0,0.4465 0,0.8929 0,1.3393 0,0.1786 0,0.7143 0,0.5357 0,-0.1785 0.17857,-0.5357 0,-0.5357 -0.19965,0 -0.10174,0.425 -0.26786,0.5357 -0.0154,0.01 -1.28887,0 -1.33928,0 -0.71429,0 -1.42857,0 -2.14286,0 -0.0893,0 -0.20472,-0.063 -0.26786,0 -0.0631,0.063 0,0.1786 0,0.2679 0,0.2523 -0.0508,1.1869 0,1.3393 0.0399,0.1198 0.21139,0.1549 0.26786,0.2678 0,0.7143 -0.0893,-0.089 0.26786,0.2679 0.5542,0.5542 -0.8469,-0.022 0.26786,0.5357 0.14531,0.073 0.99813,-0.073 1.07142,0 0.0631,0.063 0.0893,0.2679 0,0.2679 -0.0893,0 0,-0.3572 0,-0.2679 0,0.2679 0,0.5357 0,0.8036 0,0.089 0,0.1786 0,0.2678 0,0.089 0.0631,0.2048 0,0.2679 -0.0631,0.063 -0.20472,-0.063 -0.26785,0 -0.71376,0.7138 0.71375,-0.178 0,0.5357 -0.12627,0.1263 -0.40945,-0.1262 -0.53572,0 -0.12627,0.1263 0.0799,0.376 0,0.5357 -0.0565,0.113 -0.17857,0.1786 -0.26785,0.2679"
       id="path13655-9-9-3"
       inkscape:connector-curvature="0"
       transform="translate(0,-308.26772)" />
    <g
       id="g7956-28-70-1-0-61"
       transform="matrix(0.15677159,0,0,0.17774531,517.69185,353.06075)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-98"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-51)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-3"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-17)" />
    </g>
    <g
       id="g7956-28-70-1-0-3"
       transform="matrix(0.15677159,0,0,0.17774531,394.47756,365.91788)"
       inkscape:transform-center-x="-73.457616"
       inkscape:transform-center-y="-46.123836"
       style="display:inline">
      <ellipse
         transform="matrix(0.92103955,0,0,0.93286005,12.163551,31.638746)"
         ry="27.142857"
         rx="55"
         cy="513.79077"
         cx="145"
         id="path7479-78-1-2-5-9"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7926-1-6-9-4-2)" />
      <ellipse
         ry="19.285713"
         rx="31.428572"
         cy="480.21936"
         cx="146.42856"
         id="path7479-7-3-63-2-4-85"
         style="opacity:0.984;fill:#786721;fill-opacity:0.971591;stroke:none;stroke-width:3.11;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455;filter:url(#filter7896-7-2-9-2-8)" />
    </g>
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 539.45811,749.23186 c 16.97828,11.3219 15.75591,18.9503 -0.84623,3.6802 -7.99942,-2.108 -13.85815,-9.2751 -23.37448,-10.532"
       id="path4733-0-2-0-4-9-1"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 478.05435,777.10886 c 23.95841,3.2029 25.92211,8.7283 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-93-2-8-4-6-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 518.02796,803.24742 c 19.9321,4.3771 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9434 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-4-0-5-8-6-00-3"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 470.15409,756.99746 c 19.9321,4.3771 21.56579,11.9281 0.5492,3.7361 -8.21853,0.9435 -16.28145,-3.6042 -25.60386,-1.3166"
       id="path4733-0-2-4-0-5-8-6-9-5-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 464.83305,789.70546 c 18.86509,7.7818 19.15865,15.502 -0.10992,3.7747 -8.25724,-0.5024 -15.40485,-6.3849 -24.9832,-5.7559"
       id="path4733-0-2-4-0-5-7-3-9-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 421.91486,806.33995 c 18.86509,7.7818 19.15865,15.502 -0.10992,3.7748 -8.25724,-0.5024 -15.40485,-6.385 -24.9832,-5.756"
       id="path4733-0-2-4-0-5-5-3-6-8"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 385.20427,784.85456 c 19.9321,4.3771 21.56579,11.9282 0.5492,3.7362 -8.21853,0.9434 -16.28145,-3.6043 -25.60386,-1.3167"
       id="path4733-0-2-4-3-0"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.26193;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.545455"
       d="m 418.70685,778.46816 c 18.8651,7.7818 19.15866,15.502 -0.10992,3.7747 -8.25723,-0.5024 -15.40484,-6.3849 -24.9832,-5.7559"
       id="path4733-0-2-4-0-5-8-0-2-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 455.94495,752.10886 c 23.95841,3.2029 25.92211,8.7284 0.66014,2.7339 -9.87868,0.6904 -8.40889,3.112 6.14275,9.49"
       id="path4733-0-2-5-93-2-8-9-5"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
    <path
       style="display:inline;fill:none;fill-rule:evenodd;stroke:#2075ac;stroke-width:1.1835;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 409.78258,761.91496 c 23.03437,7.3268 24.00569,13.1098 0.17388,2.8071 -9.84793,-1.0407 -8.82238,1.5999 4.396,10.4149"
       id="path4733-0-2-5-93-2-8-4-5-0-4"
       inkscape:connector-curvature="0"
       sodipodi:nodetypes="ccc"
       transform="translate(0,-308.26772)" />
  </g>
</svg>
</template>
<script setup>
import {ref} from "vue"

// var dataType = ref('')
// var showAlert = ref(false)

// function displayData(event, data){
//     showAlert.value = true
//     dataType.value = data
// }
</script>
<style scoped>

#layer2:hover{
    filter: url(#outline);     
}
#layer3:hover{
    filter: url(#outline);     
}
#layer4:hover{
    filter: url(#outline);     
}
#layer5:hover{
    filter: url(#outline);     
}
#layer6:hover{
    filter: url(#outline);     
}
</style>