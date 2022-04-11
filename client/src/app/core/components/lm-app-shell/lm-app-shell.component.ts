import { Component, OnInit } from '@angular/core'
// import { MatSidenav } from '@angular/material/sidenav'

// import { LmAuthService } from '@lm-core/services/lm-auth/lm-auth.service'

@Component({
  selector: 'app-lm-app-shell',
  templateUrl: './lm-app-shell.component.html',
  styleUrls: ['./lm-app-shell.component.scss']
})
export class LmAppShellComponent implements OnInit {

  // @ViewChild('lmSidenav', { static: true }) sidenavRef: MatSidenav

  constructor(
    // private authService: LmAuthService
  ) { }

  ngOnInit(): void {
    // this.authService.getUserContext()
  }

  // closeSidenav(_: any) {
  //   console.log(_)
  // }

}
