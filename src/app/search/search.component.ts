import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: News[];
  nhom_dm: any;
  ngaybd:any;
  ngaykt:any;
  noidung:any;
  original_data:any;
  constructor() { }

  ngOnInit(): void {
    this.data = [{name:'Ba công khai',nhom:'Ba công khai',ngayphat:'09/04/2020'},
    {name:'Khoa Lý luận chính trị',nhom:'Khoa Lý luận chính trị',ngayphat:'05/04/2020' },
    {name:'KHOA KHOA HỌC CƠ BẢN',nhom:'khoa khoa học cơ bản',ngayphat:'09/04/2020' },
    {name:'Đội ngũ cán bộ Trường ĐHSPKT Hưng Yên',nhom:'Đội ngũ cán bộ',ngayphat:'04/04/2020' },
    {name:'DANH MỤC CÁC PHÒNG - TRUNG TÂM CHỨC NĂNG',nhom:'Phòng-Ban-Trung tâm',ngayphat:'09/04/2020' },
    {name:'SỔ QUẢN LÝ VĂN BẰNG NĂM 2016',nhom:'Văn bằng 2',ngayphat:'09/01/2020' }
  ];
  this.data.push({name:'Ba công khai',nhom:'Ba công khai',ngayphat:'09/04/2020' });
  this.original_data = $.extend(true, [], this.data);

  }
  public TimKiem(){
    if(this.nhom_dm != null && this.nhom_dm != '') {
      this.data = this.original_data.filter(x=>x.nhom.indexOf(this.nhom_dm)>=0);
    } else  if(this.noidung != null && this.noidung != '') {
      this.data = this.original_data.filter(x=>x.name.indexOf(this.noidung)>=0);
    } else {
      this.data = $.extend(true, [], this.original_data);
    }

  }

}
export interface News{
  name;
  nhom;
  ngayphat;
}
