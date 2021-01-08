import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isMobileDevice() == true) {
      this.navbarVisible = false;
    } else {
      this.navbarVisible = true;
    }
  }
  title = 'maistering';
  _subscription = new Subscription();
  footerImages:string[] =[
    "assets/babypic_01.jpg",
    "assets/babypic_02.jpg",
    "assets/babypic_03.jpg",
    "assets/babypic_04.jpg",
    "assets/babypic_05.jpg",
    "assets/babypic_06.jpg",
    "assets/babypic_07.jpg",
    "assets/babypic_08.jpg",
    "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
  ];
  navbarVisible: boolean = true;
  private toggleButton: any;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('sidebar')[0];
    if (this.isMobileDevice() == true) {
      this.navbarVisible = false;
    } else {
      this.navbarVisible = true;
    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('show');
    }, 500);

    body.classList.add('nav-open');
    // this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('show');
    // this.sidebarVisible = false;
    // body.classList.remove('nav-open');
  };
  sidebarToggle() {
    if (this.navbarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  // sidebarToggle() {
  //   // collapse show
  // }

  isMobileDevice() {
    var isMob = false;
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    if (isMobile.any()) {
      isMob = true;
    }
    return isMob;
  }
}
