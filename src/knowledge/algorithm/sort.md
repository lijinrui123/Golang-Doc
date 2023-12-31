# 经典排序算法

用Go实现经典的几个排序算法

## 稳定排序

稳定排序指的是排序过后相同元素的相对位置不会发送变化。

<br>

### 冒泡排序

![在这里插入图片描述](https://img-blog.csdnimg.cn/611505bb89874a389ad48a277b1a6c93.gif#pic_center)

从下标0开始，不断将两个数字相比较，如果前一个数大于后一个数字，那么就交换位置，直至末尾。外层循环每一轮结束后，就能确定一个值是第`i+1`大的元素，于是后续的元素就不再去交换，所以内层循环的终止条件是`len(slice)-(i+1)`。

```go
func BubbleSort(slice []int) {
	for i := 0; i < len(slice); i++ {
		for j := 0; j < len(slice)-1-i; j++ {
			if slice[j] > slice[j+1] {
				slice[j+1], slice[j] = slice[j], slice[j+1]
			}
		}
	}
}
```

**时间复杂度：O(n^2）**

情况最差时，切片完全是逆序的，就需要交换总共 (n-1)+(n-2)+(n-3)+...+1 次 ，对其进行数列求和为 (n^2-n)/2 ，忽略低阶项则为O(n^2)

**空间复杂度：O(1）**

算法进行过程中没用到任何的额外空间，所以为O(1)

### 插入排序



### 归并排序



## 不稳定排序

不稳定排序指的是排序过后元素的相对位置会发送变化。

### 选择排序



### 希尔排序



### 快速排序



### 计数排序



### 基数排序



### 桶排序



### 堆排序

### 