import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from 'src/app/models/TreeNode';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  @Input() 
  treeData: TreeNode[] = [];
  @Output() 
  nodeClick: EventEmitter<string> = new EventEmitter<string>();
  nodeName: string = '';

  ngOnInit(): void {
    document.getElementById('tree')?.addEventListener('click', (e) => {
      this.nodeName = (e.target as HTMLElement).textContent!;
    });
  }

  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  onNodeClick(): void {
    this.nodeClick.emit(this.nodeName);
  }
}
