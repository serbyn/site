---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        If you are interested in the open positions, please check the corresponding webpage.
      email: maksym.serbyn@ist.ac.at
      address:
        street: Am Campus 1
        city: Klosterneuburg
        region: NÖ
        postcode: '3400'
        country: Austria
        country_code: AT
      coordinates:
        latitude: '48.309658'
        longitude: '16.258536'
      directions: We are located in the Office Building West
#      office_hours:
#       - 'Monday 10:00 to 13:00'
#       - 'Wednesday 09:00 to 10:00'
#      appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
    
      # Automatically link email and phone or display as text?
      autolink: true
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '1'
---

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
