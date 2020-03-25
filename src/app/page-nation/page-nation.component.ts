import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Posts } from '../entites/post';
import { MatPaginator, MatSort,MatTableDataSource } from '@angular/material';

// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-page-nation',
  templateUrl: './page-nation.component.html',
  styleUrls: ['./page-nation.component.scss']
})
export class PageNationComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<Posts>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private demoService: DemoService ) { 
  }

  ngOnInit() {
      this.demoService.getComment().subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

}
