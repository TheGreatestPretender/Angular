import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'The superior brother (luigi)',
      url: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Theres a snake in my boot',
      url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Edgelord 9000',
      url: 'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Me too kitty.... me too',
      url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'The superior brother (luigi)',
      url: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Theres a snake in my boot',
      url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Edgelord 9000',
      url: 'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Me too kitty.... me too',
      url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'The superior brother (luigi)',
      url: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Theres a snake in my boot',
      url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Edgelord 9000',
      url: 'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Me too kitty.... me too',
      url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'The superior brother (luigi)',
      url: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Theres a snake in my boot',
      url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Edgelord 9000',
      url: 'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Me too kitty.... me too',
      url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'The superior brother (luigi)',
      url: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Theres a snake in my boot',
      url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Edgelord 9000',
      url: 'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Me too kitty.... me too',
      url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'The superior brother (luigi)',
      url: 'https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVpZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Theres a snake in my boot',
      url: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Edgelord 9000',
      url: 'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Me too kitty.... me too',
      url: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    }
  ]
  currentPage = 0;

  checkWindowIndex(idx: number) {
    return Math.abs(this.currentPage - idx) < 5;
  }

}
