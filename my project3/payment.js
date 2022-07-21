function validation(){
	
	swal({
		title: "Are you sure?",
		text: "Once Payment, you will not be able to recover your Money!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	  })
	  .then((willDelete) => {
		if (willDelete) {
		  swal("Poof! Your Payment is Sucessfull", {
			icon: "success",
		  });
		} else {
		  swal("Your payment is fullysafe!");
		}
		
	
	  });

	  
	
	
}
